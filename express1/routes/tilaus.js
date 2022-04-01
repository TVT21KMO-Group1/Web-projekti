const express = require('express');
const router = express.Router();
const tilaus = require('../models/tilaus_model');

router.post('/', function(req, res) {
    tilaus.add(req.body, function(err, dbResult) {
      if (err) {
        res.json(err);
      } else {
        res.send(dbResult);
      }
    });
  });

module.exports = router;