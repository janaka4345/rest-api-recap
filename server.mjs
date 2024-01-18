// const express = require('express')
import express from "express";

//express app
const app = express()


//route handler
app.get('/', () => {

})

//listen
app.listen(5000, () => {
    console.log('listening on port 5000');
})