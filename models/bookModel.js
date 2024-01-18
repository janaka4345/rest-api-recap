const { timeStamp } = require('console')
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const bookSchema = new Schema({
    bookId: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },

}, { timestamps: true })

module.exports = mongoose.model('Book', bookSchema)

