const express = require('express');

const { 
    getAllUser,
    createUser,
    getUserByName,
    updateUser,
    deleteUser
} = require('../controller/user.controller');

const userRouter = express.Router();

userRouter.route('/').get(getAllUser).post(createUser)
userRouter.route('/:id').put(updateUser).delete(deleteUser)
userRouter.route('/:name').get(getUserByName)

module.exports = userRouter;
