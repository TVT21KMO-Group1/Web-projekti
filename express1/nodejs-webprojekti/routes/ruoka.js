const express = require('express');
const router = express.Router();
const ruoka = require('../models/ruoka_model');


router.post('/', 
function(request, response) {
  ruoka.add(request.body, function(err, count) {
    if (err) {
      response.json(err);
    } else {
      response.json(request.body); 
    }
  });
});

module.exports = router;