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

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req, res) => {
    res.render("Index", { pokemon })
})

app.get('/pokemon/:id', (req, res) => {
    res.render('Show', {
        selectPokemon: pokemon[req.params.id]
    })
})





app.listen(PORT, () => {
    console.log(`Listening to ${PORT}`)
})