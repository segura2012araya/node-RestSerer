require('./config/config.js');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


app.get('/usuario', function(req, res) {
    res.json('get Usuario');
})

app.post('/usuario', function(req, res) {
    let id = req.params.id;
    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    } else {

        res.json({ persona: body });
    }
})

app.put('/usuario/:id', function(req, res) {
    res.json({ id });


})
app.delete('/usuario/:id', function(req, res) {
    let id = req.params.id;

    res.json({ id });
})

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto:', process.env.PORT);
})