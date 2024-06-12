const express = require('express');
const router = express.Router();
// const db = require('../config/db').getConnection();
const dbf = require('../config/firebase');
const app = express();
const admin = require('firebase-admin');

const dbff = admin.database();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));




// Ruta para agregar un nuevo registro
router.post('/registros', (req, res) => {
    /* const { Nombre, Telefono, Nivel } = req.body;
     
     console.log(req)
     const query = 'INSERT INTO registros (Nombre, Telefono, Nivel) VALUES (?, ?, ?)';
     console.log(Nombre, Telefono, Nivel)
     db.query(query, [Nombre, Telefono, Nivel], (err, results) => {
         if (err) {
             console.error('Error agregando el registro:', err);
             res.status(500).send(err);
             return;
         }
         res.status(201).send('Registro agregado con éxito');
     });*/

    //firebase
    const datosfb = {
        nombre: req.body.Nombre,
        telefono: req.body.Telefono,
        nivel: req.body.Nivel
    };
    dbff.ref('Registros').push(datosfb);
    console.log("Datos Almacenados correctamente");
    // Envía la respuesta de éxito al cliente
    res.json({ success: true, message: "Datos almacenados correctamente" });

});

module.exports = router;
