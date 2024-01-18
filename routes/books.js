const express = require('express')

const router = express.Router()//instance of router

//get all books
router.get('/', (req, res) => {
    res.json({ message: 'get all books' })
})

//get a single book
router.get('/:id', (req, res) => {
    res.json({ message: 'get a single book' })
})

//post a  new book
router.post('/', async (req, res) => {
    const { id, title, author, price } = req.body
    try {
        const book = await Book.create({ id, title, author, price })
        res.status(200).json(book)
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
})


//delete a  book
router.delete('/:id', (req, res) => {
    res.json({ message: 'delete a book' })
})

//update a  new book
router.patch('/:id', (req, res) => {
    res.json({ message: 'update a book' })
})

module.exports = router