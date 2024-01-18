const Book = require('../models/bookModel')
const mongoose = require('mongoose')

//get all books
const getAllBooks = async (req, res) => {
    const allBooks = await Book.find({}).sort({ createdAt: -1 })
    res.status(200).json(allBooks)
}

//get a single book
const getABook = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'no such book' })
    }
    const book = await Book.findById(id)
    if (!book) {
        return res.status(404).json({ error: 'no such book' })
    }
    res.status(200).json(book)
}

//post a  new book
const createABook = async (req, res) => {
    const { bookId, title, author, price } = req.body
    try {
        const book = await Book.create({ bookId, title, author, price })
        res.status(200).json(book)
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//delete a  book
const deleteABook = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'no such book' })
    }
    const book = await Book.findOneAndDelete({ _id: id })
    if (!book) {
        return res.status(404).json({ error: 'no such book' })
    }
    res.status(200).json(book)
}

//update a  new book
const updateABook = async (req, res) => {
    const { id } = req.params
    // const { bookId, title, author, price } = req.body
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'no such book' })
    }
    const book = await Book.findOneAndUpdate({ _id: id }, { ...req.body })
    if (!book) {
        return res.status(404).json({ error: 'no such book' })
    }
    res.status(200).json(book)
}
module.exports = { getAllBooks, getABook, createABook, deleteABook, updateABook }