require('dotenv').config();
const express = require('express')
const app = express()
const Pokemon = require('./models/pokemon')
const PORT = process.env.PORT || 3000
const { connect, connection } = require('mongoose');

// Database connection
connect(process.env.MONGO_URI, {
    // Having these two properties set to true is best practice when connecting to MongoDB
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  // This line of code will run the function below once the connection to MongoDB has been established.
  connection.once('open', () => {
    console.log('connected to mongo');
  });


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
app.get('/pokemon', async (req, res) => {
    try {
        const foundPokemon = await Pokemon.find({})
        res.render("Index", { pokemon: foundPokemon })
    } catch (err) {
        res.status(400).send(err)
    }
})

// New
app.get('/pokemon/new', (req, res) => {
    res.render('New')
})

// Create
app.post("/pokemon", async (req, res) => {
    try{
        const newPokemon = await Pokemon.create(req.body);
        //pokemon.push(req.body)
        res.redirect('pokemon')
    }catch(err) {
        res.status(400).send(err);
    }
})


// Show
app.get('/pokemon/:id', async (req, res) => {
    try {
        const foundPokemon = await Pokemon.findById(req.params.id)
        res.render('Show', {
            pokemon: foundPokemon
        })
    }catch(err) {
        res.status(400).send(err)
    }
})




app.listen(PORT, () => {
    console.log(`Listening to ${PORT}`)
})