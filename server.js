const express = require('express')
const port = 3000

const Pokemon = require('./models/pokemon')

const app = express()

require('dotenv').config()

const mongoose = require('mongoose')

const mongoURI = process.env.MONGO_URI


mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})

// Middleware

app.use((req, res, next) => {
    console.log('I run for all routes')
    next()
})

app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine())

// Routes

// Index

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App')
})

app.get('/pokemon', (req, res) => {
    Pokemon.find({})
})

// Create

app.get('/pokemon/new', (req, res) => {
    res.render('New')
})

app.post('/pokemon', (req, res) => {
    Pokemon.create(req.body)
})


// Show

app.get('/pokemon/:id', (req, res) => {
    Pokemon.findById(req.params.id)
    })


// Tell express to listen

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})