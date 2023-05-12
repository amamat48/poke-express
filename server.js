const express = require('express')
const port = 3000

//Data
const pokemon = require('./models/pokemon')

const app = express()

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
    res.render('Index', { pokemon: pokemon })
})


// Show

app.get('/pokemon/:id', (req, res) => {
    res.render('Show', { pokemon: pokemon[req.params.id] })
})

// Tell express to listen

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})