const { v4: uuidv4 } = require('uuid');

const User = require('../model/user.model');


// const getAllUser = async(req,res) => {
//   try {
//       const user = await User.find();
//       res.status(200).json({
//           success: true,
//           data: user
//       })
//   } catch (error) {
//       console.log(error);
//       res.status(500).json({
//           success: false,
//           message: 'Failed to fetch the user'
//       })      
//   }
// }

const getAllUser = async (req, res) => {
  try {
    const { name, sortBy, order, page, limit } = req.query;

    let query = {};

    if (name) {
      query.name = { $regex: new RegExp(name, 'i') };
    }

    const sortField = sortBy || 'age';
    const sortOrder = order === 'desc' ? -1 : 1;
    const sortObject = { [sortField]: sortOrder };

    const pageNumber = parseInt(page) || 1;
    const pageSize = parseInt(limit) || 10;
    const skip = (pageNumber - 1) * pageSize;

    const users = await User.find(query)
      .sort(sortObject)
      .skip(skip)
      .limit(pageSize);

    res.status(200).json({
      success: true,
      data: users,
      page: pageNumber,
      pageSize,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch users',
    });
  }
};

const createUser = async(req,res) => {
  try {
      const user = new User({ id: uuidv4(), ...req.body });
      await user.save()
      res.status(201).json({
          success: true,
          data: user
      })

  } catch (error) {
    console.log(error);
      res.status(500).json({
          success: false,
          message: 'Failed to create a user'
      })
  }
}

const getUserByName = async (req, res, next) => {
  try {
    const { name } = req.params;
    const user = await User.findOne({ name });

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    res.status(200).json({ success: true, data: user, message: 'User found' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Failed to fetch user' });
  }
}

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ id });
    
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const updatedUser = await User.findOneAndUpdate({ id }, req.body, { new: true, useFindAndModify: false });

    if (!updatedUser) {
      return res.status(500).json({ success: false, message: 'Failed to update user' });
    }

    res.status(202).json({ success: true, data: updatedUser, message: 'User updated successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Failed to update user' });
  }
}

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ id });

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    await User.findOneAndDelete({ id });

    res.status(200).json({ success: true, message: 'User deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Failed to delete user' });
  }
}


module.exports = {
    getAllUser,
    createUser,
    getUserByName,
    updateUser,
    deleteUser
}