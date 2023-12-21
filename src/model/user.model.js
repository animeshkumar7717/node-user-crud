const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const userSchema = new Schema({
    id: {
        type: String,
        unique: true,
    },
    name: {
        type: String,
        required: true,
        unique: false,
    },
    age: {
        type: Number,
        required: true,
        unique: false,
    }
});

module.exports = mongoose.model('User', userSchema);
