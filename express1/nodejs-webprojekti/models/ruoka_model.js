const db = require('../lib/db');

const ruoka ={
    add: function(ruoka, callback) {
          return db.query('insert into Ruoka (Tuote, Kuvaus, Hinta) values(?,?,?)',
          [ruoka.tuote, ruoka.kuvaus, ruoka.hinta], callback);
        }

}

module.exports = ruoka;