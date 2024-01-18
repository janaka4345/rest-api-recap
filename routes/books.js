const express = require('express')
const router = express.Router()//instance of router

//require controllers
const { getAllBooks, getABook, createABook, deleteABook, updateABook } = require('../controllers/bookControllers')

//get all books
router.get('/', getAllBooks)

//get a single book
router.get('/:id', getABook)

//post a  new book
router.post('/', createABook)


//delete a  book
router.delete('/:id', deleteABook)

//update a  new book
router.patch('/:id', updateABook)

module.exports = router