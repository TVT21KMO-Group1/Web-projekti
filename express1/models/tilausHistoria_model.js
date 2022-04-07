const db = require('../lib/db');


const tilausHistoria = {

  getAll: function(idKayttaja,callback) {
    return db.query('select tilaus.idtilaus, tilaus.aika, ravintola.nimi, ruoka.tuote, tilaus.summa from tilaus join tilatuttuotteet on tilaus.idtilaus = tilatuttuotteet.tilaus_idtilaus join ruoka on tilatuttuotteet.tuotteet = ruoka.idruoka join ravintola on tilaus.idravintola = ravintola.idravintola where idKayttaja = ?',[idKayttaja], callback);
  },
};

module.exports = ostosHistoria;

/*
select tilaus.idtilaus, tilaus.aika, ravintola.nimi, ruoka.tuote, tilaus.summa from tilaus join tilatuttuotteet on tilaus.idtilaus = tilatuttuotteet.tilaus_idtilaus join 
ruoka on tilatuttuotteet.tuotteet = ruoka.idruoka join ravintola on tilaus.idravintola = ravintola.idravintola where ravintola.idravintola = 2;
*/