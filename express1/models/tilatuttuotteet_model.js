const db = require('../lib/db');

const tilatuttuotteet ={
    add: function(tilatuttuotteet, callback) {
      return db.query('insert into Tilatuttuotteet (Tuotteet, Tilaus_idTilaus) values(?,?)',
      [tilatuttuotteet.Tuotteet, tilatuttuotteet.Tilaus_idTilaus], callback);
    },
}

module.exports = tilatuttuotteet;