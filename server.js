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

app.get('/pokemon', async (req, res) => {
    try {
        const pokemon = await Pokemon.find()
        res.render('Index', { pokemon })
      } catch (error) {
        console.error(error)
      }
})

// Create

app.get('/pokemon/new', (req, res) => {
    res.render('New')
})

app.post('/pokemon', (req, res) => {
    Pokemon.create(req.body)
})


// Show

app.get('/pokemon/:id', async (req, res) => {
        try{
            
            console.log(req.params.id)
            const pokemon = await Pokemon.findById(req.params.id)
            res.render('Show', { pokemon })
        } catch(error) {
            console.log(error)
        }
    })


// Tell express to listen

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})