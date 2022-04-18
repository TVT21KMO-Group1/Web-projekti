const db = require('../lib/db');

const login={
  checkPassword: function(idKayttaja, callback) {
      return db.query('SELECT Salasana FROM jyznq86kdd1xhcew.Kayttaja WHERE KayttajaTunnus = ?',[idKayttaja], callback); 
    },
  checkOnOmistaja: function(idKayttaja, callback) {
    return db.query('SELECT OnOmistaja FROM Kayttaja WHERE KayttajaTunnus = ?',[idKayttaja], callback);
  }
};
          
module.exports = login;