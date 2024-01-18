const express = require('express')

//express app
const app = express()


//routes
app.get('/', (req, res) => {
    res.json({ message: 'welcome to the app' })
})

//listen
app.listen(5000, () => {
    console.log('listening on port 5000');
})