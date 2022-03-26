const db = require('../lib/db');

const ruoka ={
  add: function(ruoka, callback) {      // Lisää ruoan ravintolan ruokalistalle, tuotekategorian oltava int -muodossa
    return db.query('insert into Ruoka (Tuote, Kuvaus, Hinta, Tuotekategoria_idTuotekategoria) values(?,?,?,?)',
    [ruoka.tuote, ruoka.kuvaus, ruoka.hinta, ruoka.tuotekategoria_idtuotekategoria], callback);
  },
  getAllInRestaurant: function(idRavintola, cb) {   // Hakee tietyn ravintolan kaikki tuotteet
    return db.query('select * from ruoka join tuotekategoria on ruoka.tuotekategoria_idtuotekategoria = tuotekategoria.idtuotekategoria where tuotekategoria.ravintola_idravintola = ?',
    [idRavintola], cb);
  }
}

module.exports = ruoka;