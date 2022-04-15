const db = require('../lib/db');
var bodyParser = require('body-parser');


const tilaus ={
    add: function(tilaus, callback) {
      const testi = JSON.stringify(tilaus.OstosTaulu);
      //console.log(testi);
      //console.log(tilaus.Summa)
      //console.log(tilaus.idKayttaja)
      console.log("idRavintola = ",tilaus.idRavintola)
      
      return db.query('call jyznq86kdd1xhcew.OstaTuote(?,?,?,?)',
      [tilaus.Summa, tilaus.idKayttaja, tilaus.idRavintola, testi], callback);
    },

    

}

module.exports = tilaus;