const { v4: uuidv4 } = require('uuid');

const Book = require('../model/book.model');


const getAllBook = async(req,res) => {
  try {
      const book = await Book.find();
      res.status(200).json({
          success: true,
          data: book
      })
  } catch (error) {
      console.log(error);
      res.status(500).json({
          success: false,
          message: 'Failed to fetch the book'
      })      
  }
}

const createBook = async(req,res) => {
  try {
      const book = new Book({ id: uuidv4(), ...req.body });
      await book.save()
      res.status(201).json({
          success: true,
          data: book
      })

  } catch (error) {
      res.status(500).json({
          success: false,
          message: 'Failed to create a book'
      })
  }
}

const getBookById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await Book.findOne({ id });

    if (!book) {
      return res.status(404).json({ success: false, message: 'Book not found' });
    }

    res.status(200).json({ success: true, data: book, message: 'Book found' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Failed to fetch book' });
  }
}

const updateBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await Book.findOne({ id });
    
    if (!book) {
      return res.status(404).json({ success: false, message: 'Book not found' });
    }

    const updatedBook = await Book.findOneAndUpdate({ id }, req.body, { new: true, useFindAndModify: false });

    if (!updatedBook) {
      return res.status(500).json({ success: false, message: 'Failed to update book' });
    }

    res.status(202).json({ success: true, data: updatedBook, message: 'Book updated successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Failed to update book' });
  }
}

const deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await Book.findOne({ id });

    if (!book) {
      return res.status(404).json({ success: false, message: 'Book not found' });
    }

    await Book.findOneAndDelete({ id });

    res.status(200).json({ success: true, message: 'Book deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Failed to delete book' });
  }
}


module.exports = {
    getAllBook,
    createBook,
    getBookById,
    updateBook,
    deleteBook
}