const cloudinary = require('cloudinary');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const express = require('express');
const multer = require('multer');
const router = express.Router();
const ruoka = require('../models/ruoka_model');

const storage = new CloudinaryStorage({ cloudinary: cloudinary,
folder: 'foodpictures', allowedFormats: ['jpg', 'png']});

const parser = multer({ storage: storage });

router.post('/kuva', parser.single('image'), function(req, res) {
  console.log(req.file);
  console.log(req.file.secure_url);
  ruoka.addWithPicture(req.file.secure_url, req.body, function(err, dbResult) {    // ruoka_model sisältää tämän toteutuksen
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