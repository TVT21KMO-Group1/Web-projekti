const db = require('../lib/db');

const ruoka ={
  addWithPicture: function(kuva, ruoka, callback) {      // Lisää ruoan ravintolan ruokalistalle, tuotekategorian oltava int -muodossa
    return db.query('insert into Ruoka (Tuote, Kuvaus, Hinta, Tuotekategoria_idTuotekategoria, Kuva) values(?,?,?,?,?)',
    [ruoka.tuote, ruoka.kuvaus, ruoka.hinta, ruoka.tuotekategoria_idtuotekategoria, kuva], callback);
  },
  add: function(ruoka, callback) {      // Lisää ruoan ravintolan ruokalistalle, tuotekategorian oltava int -muodossa
    return db.query('insert into Ruoka (Tuote, Kuvaus, Hinta, Tuotekategoria_idTuotekategoria) values(?,?,?,?)',
    [ruoka.tuote, ruoka.kuvaus, ruoka.hinta, ruoka.tuotekategoria_idtuotekategoria], callback);
  },
  getAllInRestaurant: function(idRavintola, cb) {   // Hakee tietyn ravintolan kaikki tuotteet
    return db.query('select * from ruoka join tuotekategoria on ruoka.tuotekategoria_idtuotekategoria = tuotekategoria.idtuotekategoria where tuotekategoria.ravintola_idravintola = ?',
    [idRavintola], cb);
  },
  getAllFromCategory: function(idRavintola, idTuotekategoria, cb) {   // Hakee tietyn ravintolan Tietyn kategorian tuotteet
    return db.query('select * from ruoka join tuotekategoria on ruoka.tuotekategoria_idtuotekategoria = tuotekategoria.idtuotekategoria where tuotekategoria.ravintola_idravintola = ? && Tuotekategoria_idTuotekategoria = ?',
    [idRavintola, idTuotekategoria], cb);
  }
}

module.exports = ruoka;