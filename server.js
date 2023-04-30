const express = require('express')
const pokemon = require('./models/pokemon')

const app = express()

const PORT = process.env.PORT || 3000

//View Engine Middleware
const reactViewsEngine = require("jsx-view-engine").createEngine()
//^ same as reactViewsEngine.createEngine()
app.engine('jsx', reactViewsEngine);
app.set("view engine", "jsx")
app.set('views', "./views") // look for the views inside the views folders

// Custom Middleware
app.use(express.urlencoded({extended: false}))
app.use((req, res, next) => {
    console.log("Middleware Running")
    next()
})

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

// Index
app.get('/pokemon', (req, res) => {
    res.render("Index", { pokemon })
})

// New
app.get('/pokemon/new', (req, res) => {
    res.render('New')
})

// Create
app.post("/pokemon", (req, res) => {
    pokemon.push(req.body)
    res.redirect('pokemon')
})


// Show
app.get('/pokemon/:id', (req, res) => {
    res.render('Show', {
        selectPokemon: pokemon[req.params.id]
    })
})




app.listen(PORT, () => {
    console.log(`Listening to ${PORT}`)
})