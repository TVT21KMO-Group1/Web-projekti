const express = require ('express')
//const app = express.Router();
//const port = 3000
var router = express.Router();
//const router = express()


/*
const Kayttaja = require('./routes/Kayttaja')
const Ravintolat = require('./routes/Ravintolat')
const Tuotekategoria = require('./routes/Tuotekategoria')
const Ruoka = require('./routes/Ruoka')
const Tilaus = require('./routes/Tilaus.js')
const TilatutTuotteet = require('./routes/TilatutTuotteet')


router.get('/', (req,res) => {
    res.send('Hello World!')
})
*/
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

//router.use('/Ravintolat', Ravintolat);

/*app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})*/
module.exports = router;