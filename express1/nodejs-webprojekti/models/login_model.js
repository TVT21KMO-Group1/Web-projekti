const db = require('../lib/db');

const login={
  checkPassword: function(username, callback) {
      return db.query('SELECT Salasana FROM webdatabase.Kayttaja WHERE idKayttaja = ?',[username], callback); 
    },
    idKortti: function(idKortti, callback) {
      return db.query('select Tila from Kortti where idKortti=? AND tila =0', [idKortti], callback);
    },
    getById: function(id, callback) {
      return db.query('select Lukittu from Kortti where idKortti=?', [id], callback);
    }
};
          
module.exports = login;