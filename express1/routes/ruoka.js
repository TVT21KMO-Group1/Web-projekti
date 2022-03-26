const express = require('express');
const router = express.Router();
const ruoka = require('../models/ruoka_model');


router.post('/', function(req, res) {
  ruoka.add(req.body, function(err, count) {    // ruoka_model sisältää tämän toteutuksen
    if (err) {
      res.json(err);
    } else {
      res.sendStatus(201);
    }
  });
});

router.get('/all/:idRavintola', function(req, res) {    // hakee tietyn ravintolan kaikki tuotteet
  ruoka.getAllInRestaurant(req.params.idRavintola, function(err, dbResult) {  // ruoka_model sisältää tämän toteutuksen
    if (err) {
        res.json(err);
    }
    else {
        res.json(dbResult);
    }
});
});

module.exports = router;