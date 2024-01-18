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
router.post('/', (req, res) => {
    res.json({ message: 'post a new book' })
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