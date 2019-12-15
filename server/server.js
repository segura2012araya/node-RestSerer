require('./config/config.js');

const express = require('express');
// Using Node.js `require()`
const mongoose = require('mongoose');

const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(require("./routes/usuario.js"));




mongoose.connect('mongodb://localhost:27017/cafe', (err, res) => {

    if (err) throw err;
    console.log("Base de Datos se Encuentra Online");
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto:', process.env.PORT);
})