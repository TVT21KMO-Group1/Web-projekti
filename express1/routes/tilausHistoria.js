const express = require('express');
const router = express.Router();

const tilausHistoria = require('../models/tilausHistoria_model')

router.get('/:idKayttaja', (req, res) => {             //tän tulisi hakea tilaukset
    tilausHistoria.getAll(req.params.idKayttaja, function(err, dbResult) {
        if(err) {
            res.json('errori');
        } else { 
            res.send(dbResult); 
        }
        })
    });


module.exports = router;