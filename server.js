require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
//routes module import
const booksRoutes = require('./routes/books')

//express app
const app = express()

//middleware
app.use(express.json())//parse the request json data to get an js object 

// app.use((req, res, next) => {
// console.log(req.path, req.method);
// next()
// })

//routes use
app.use('/api/books', booksRoutes)


//connect to mongodb database
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        //listen
        app.listen(process.env.PORT, () => {
            console.log(`listening on port ${process.env.PORT}`);
        })
    })
    .catch((error) => {
        console.log(error.message);
    })

