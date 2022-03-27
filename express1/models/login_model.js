const db = require('../lib/db');

const login={
  checkPassword: function(idKayttaja, callback) {
      return db.query('SELECT Salasana FROM webdatabase.Kayttaja WHERE KayttajaTunnus = ?',[idKayttaja], callback); 
    },
  checkOnOmistaja: function(idKayttaja, callback) {
    return db.query('SELECT OnOmistaja FROM webdatabase.Kayttaja WHERE KayttajaTunnus = ?',[idKayttaja], callback);
  }
};
          
module.exports = login;