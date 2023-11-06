const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const bookSchema = new Schema({
    id: {
        type: String,
        unique: true,
    },
    title: {
        type: String,
        unique: true,
        require: true
    },
    author: {
        type: String,
    },
    summary: {
        type: String,
        unique: false,
        require: true
    }
})

module.exports = mongoose.model('Book', bookSchema);
