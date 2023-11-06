const express = require('express');

const { 
    getAllBook,
    createBook,
    getBookById,
    updateBook,
    deleteBook
} = require('../controller/book.controller');

const bookRouter = express.Router();

bookRouter.route('/').get(getAllBook).post(createBook)
bookRouter.route('/:id').put(updateBook).delete(deleteBook).get(getBookById)

module.exports = bookRouter;
