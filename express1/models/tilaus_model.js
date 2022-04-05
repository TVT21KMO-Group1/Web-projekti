const db = require('../lib/db');
var bodyParser = require('body-parser');


const tilaus ={
    add: function(tilaus, callback) {
      const testi = JSON.stringify(tilaus.OstosTaulu);
      const testi2 = JSON.parse(testi);
      const testi3 = tilaus.OstosTaulu;
      console.log(testi2)
      return db.query('call webdatabase.OstaTuote(?,?,?)',
      [tilaus.Summa, tilaus.idKayttaja, testi], callback);
    },

    

}

module.exports = tilaus;