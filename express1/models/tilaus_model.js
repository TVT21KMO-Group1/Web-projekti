const db = require('../lib/db');

const tilaus ={
    add: function(tilaus, callback) {
      return db.query('call webdatabase.OstaTuote(Summa, idKayttaja, OstosTaulu) values (?,?,?)',
      [tilaus.Summa, tilaus.idKayttaja, tilaus.OstosTaulu], callback);
    },

    

}

module.exports = tilaus;