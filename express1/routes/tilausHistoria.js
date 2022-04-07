const express = require('express');
const router = express.Router();

const ostosHistoria = require('../models/tilausHistoria_model')

router.get('/', (req, res) => {             //tän tulisi hakea tilaukset
    ostosHistoria.getAll(function(err, dbResult) {
        if(err) {
            res.json('errori');
        } else { 
            res.send(dbResult); 
        }})}
  );


module.exports = router;