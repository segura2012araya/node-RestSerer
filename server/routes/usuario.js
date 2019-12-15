const express = require('express');
const bcrypt = require('bcrypt');
const Usuario = require('../models/usuario.js');
const app = express();

app.get('/usuario', function(req, res) {
    res.json('get Usuario local');
})

app.post('/usuario', function(req, res) {
    let body = req.body;

    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        rol: body.rol
    });

    usuario.save((err, usuarioDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            usuario: usuarioDB
        });

    });

    // if (body.nombre === undefined) {
    //     res.status(400).json({
    //         ok: false,
    //         mensaje: 'El nombre es necesario'
    //     });
    // } else {

    //     res.json({ persona: body });
    // }
})

app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;
    res.json({ id });

})
app.delete('/usuario/:id', function(req, res) {
    let id = req.params.id;

    res.json({ id });
})

module.exports = app;