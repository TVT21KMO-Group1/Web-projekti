const express = require('express');
const router = express.Router();
const tilaus = require('../models/tilaus_model');
const bodyParser = require('body-parser')

router.post('/',  function(req, res) {  
    tilaus.add(req.body, function(err, dbResult) {
     // console.log(req.body.OstosTaulu)
      if (err) {
        res.json(err);
      } else {
        res.send(dbResult);
      }
    });
  });

module.exports = router;