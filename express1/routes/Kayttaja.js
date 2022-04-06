const express = require('express');
const router = express.Router();
const Kayttaja = require('../models/kayttaja_model');


router.post('/', 
function(request, response) {
  Kayttaja.add(request.body, function(err, count) {
    if (err) {
      //response.json(err);
      response.json(err.errno)
  
    } else {
      response.json(request.body); 
    }
  });
});

router.get('/', function(req,res){
    Kayttaja.getAll(function(err,dbResult){
        if(err) {
            res.json('errori');
        } else { 
            res.send(dbResult); 
        }
    })
})

router.get('/:KayttajaTunnus?', function(req, res){
  Kayttaja.get(req.params.KayttajaTunnus, function(err, dbResult){
    if(err) {
      res.json('loginerrori');
  } else { 
      res.send(dbResult); 
  }
  })
})


module.exports = router;