// Routes.js - Módulo de rutas
const express = require('express');
const router = express.Router();
const push = require('./push');

const mensajes = [

  {
    _id: 'XXX',
    user: 'Barra Vieja II',
    mensaje: 'Escribe tu pedido'
  }

];


// Get mensajes
router.get('/', function (req, res) {
  // res.json('Obteniendo mensajes');
  res.json( mensajes );
});


// Post mensaje
router.post('/', function (req, res) {

  //console.log(req.body.lat);
  //console.log(req.body.lng);
  
  const mensaje = {
    mensaje: req.body.mensaje,
    user: req.body.user,
    lat: req.body.lat,
    lng: req.body.lng,
    foto: req.body.foto
  };

  mensajes.push( mensaje );

  console.log(mensajes);


  res.json({
    ok: true,
    mensaje
  });
});

module.exports = router;