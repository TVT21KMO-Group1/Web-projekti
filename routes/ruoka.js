const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const express = require('express');
const multer = require('multer');
const router = express.Router();
const ruoka = require('../models/ruoka_model');

const storage = new CloudinaryStorage({ 
  cloudinary: cloudinary,
  params: { 
    folder: 'foodpictures'
  },
});

const parser = multer({ storage: storage });

router.post('/kuva', parser.single('image'), function(req, res) {
  console.log(req.file);
  console.log(req.file.path);
  ruoka.addWithPicture(req.file.path, req.body, function(err, dbResult) {    // ruoka_model sisältää tämän toteutuksen
    if (err) {
      res.json(err);
    } else {
      res.sendStatus(201);
    }
  });
});

router.post('/', function(req, res) {
  ruoka.add(req.body, function(err, count) {    // ruoka_model sisältää tämän toteutuksen
    if (err) {
      res.json(err);
    } else {
      res.sendStatus(201);
    }
  });
});

router.get('/:idRavintola', function(req, res) {    // hakee tietyn ravintolan kaikki tuotteet
  ruoka.getAllInRestaurant(req.params.idRavintola, function(err, dbResult) {  // ruoka_model sisältää tämän toteutuksen
    if (err) {
        res.json(err);
    }
    else {
        res.json(dbResult);
    }
});
});

router.get('/:idRavintola/:idTuotekategoria', function(req, res) {    // hakee tietyn ravintolan kaikki tuotteet
  ruoka.getAllFromCategory(req.params.idRavintola, req.params.idTuotekategoria, function(err, dbResult) { // ruoka// ruoka_model sisältää tämän toteutuksen
    if (err) {
        res.json(err);
    }
    else {
        res.json(dbResult);
    }
});
});

module.exports = router;