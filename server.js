const express = require('express')
const pokemon = require('./models/pokemon')

const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    console.log(pokemon)
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req, res) => {
    res.send(pokemon)
})



app.listen(PORT, () => {
    console.log(`Listening to ${PORT}`)
})