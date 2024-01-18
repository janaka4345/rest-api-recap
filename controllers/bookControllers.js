const Book = require('../models/bookModel')

//get all books
const getAllBooks = async (req, res) => {
    res.json({ message: 'get all books' })
}

//get a single book
const getABook = async (req, res) => {
    res.json({ message: 'get a single book' })
}

//post a  new book
const createABook = async (req, res) => {
    const { id, title, author, price } = req.body
    try {
        const book = await Book.create({ id, title, author, price })
        res.status(200).json(book)
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//delete a  book
const deleteABook = async (req, res) => {
    res.json({ message: 'delete a book' })
}

//update a  new book
const updateABook = async (req, res) => {
    res.json({ message: 'update a book' })
}
module.exports = { getAllBooks, getABook, createABook, deleteABook, updateABook }