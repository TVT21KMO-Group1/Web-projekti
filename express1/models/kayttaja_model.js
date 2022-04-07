const db = require('../lib/db');
const bcrypt = require('bcryptjs');

const saltRounds=10;
const Kayttaja={
  //getById: function(id, callback) {         
  //  return db.query('select Nimi from Asiakas JOIN kortti ON Asiakas.idAsiakas=Kortti.Asiakas_idAsiakas where idKortti=?', [id], callback);         // tasta tulee kortti idlla asiakkaan nimi
  //},
  add: function(Kayttaja, callback) {
    bcrypt.hash(Kayttaja.Salasana, saltRounds, function(err, hash) {
      return db.query('insert into Kayttaja (Nimi, Osoite, PuhNro, Salasana, OnOmistaja, KayttajaTunnus) values(?,?,?,?,?,?)',       // tassaa yritetty kaikkea kummallista
      [Kayttaja.Nimi, Kayttaja.Osoite, Kayttaja.PuhNro, hash, Kayttaja.OnOmistaja, Kayttaja.KayttajaTunnus], callback); 
    });
  },

  getAll: function(callback) {
      return db.query('select * from webdatabase.Kayttaja', callback);
  },

  get: function(KayttajaTunnus, callback) {
    return db.query('select idKayttaja from Kayttaja where KayttajaTunnus = ?', [KayttajaTunnus], callback)
  },

  put: function(Kayttaja,callback) {
    return db.query('UPDATE Kayttaja SET Ravintola_idRavintola=? WHERE idKayttaja = ? ', [Kayttaja.Ravintola_idRavintola, Kayttaja.idKayttaja], callback);//tämä kesken
  }
 /* lukitus: function(postData, callback) {         
    return db.query('UPDATE pankkiautomaatti.kortti SET Lukittu = 1 WHERE idKortti=?', [postData.id], callback);         // tasta tulee kortti idlla asiakkaan nimi
  },
  lukitusavaa: function(postData, callback) {         
    return db.query('UPDATE pankkiautomaatti.kortti SET Lukittu = 0 WHERE idKortti=?', [postData.id], callback);         // tasta tulee kortti idlla asiakkaan nimi
  },*/
}
        
module.exports = Kayttaja;