var express = require('express');
var router = express.Router();

//const router = express.Router()
const tuotekategoria = require('../models/tuotekategoria_model')


router.get('/', (req, res) => {                                 //Tämä tötterström hakee kaikki ravintolat
    tuotekategoria.getAll(function(err, dbResult) {
        if(err) {
            res.json('errori');
        } else { 
            res.send(dbResult); 
        }})}
  );
  
  router.get('/:ravintolaId?', (req,res) => {                      //tama hakee tietyn ravintolan kategoriat
    tuotekategoria.getById(req.params.ravintolaId, function(err, dbResult) {
        if (err){
            res.sendStatus(404);
        }
        else{
            res.send(dbResult);
        }
    })
 });

 router.post('/',       // tämä lisää tuotekategorian ravintolalle
  function(req, res) {
    tuotekategoria.add(req.body, function(err, dbResult) {
      if (err) {
        res.json(err);
      } else {
        res.send(dbResult);
      }
    });
});

 module.exports = router