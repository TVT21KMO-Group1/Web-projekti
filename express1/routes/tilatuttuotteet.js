const express = require('express');
const router = express.Router();
const tilatuttuotteet = require('../models/tilatuttuotteet_model');

router.post('/', function(req, res) {
    tilatuttuotteet.add(req.body, function(err, dbResult) {
      if (err) {
        res.json(err);
      } else {
        res.send(dbResult);
      }
    });
  });

  

module.exports = router;