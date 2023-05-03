const {Schema, model} = require('mongoose')

const pokemonSchema = new Schema ({
    name: {type: String, required: true},
    img: String
})

const Pokemon = model("Pokemon", pokemonSchema)

 module.exports = Pokemon
