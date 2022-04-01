const db = require('../lib/db');

const tilaus ={
    add: function(tilaus, callback) {
      return db.query('insert into Tilaus (Aika, Summa, Kayttaja_idKayttaja) values(now(),?,?)',
      [tilaus.Summa, tilaus.Kayttaja_idKayttaja], callback);
    },
}

module.exports = tilaus;