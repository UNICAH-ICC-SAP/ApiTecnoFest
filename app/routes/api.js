const express = require('express');
const router = express.Router();
const db = require('../config/db').getConnection();


// Ruta para agregar un nuevo registro
router.post('/registros', (req, res) => {
    const { Nombre, Telefono, Nivel } = req.body;
    const query = 'INSERT INTO registros (Nombre, Telefono, Nivel) VALUES (?, ?, ?)';
    db.query(query, [Nombre, Telefono, Nivel], (err, results) => {
        if (err) {
            console.error('Error agregando el registro:', err);
            res.status(500).send(err);
            return;
        }
        res.status(201).send('Registro agregado con éxito');
    });
});

module.exports = router;
