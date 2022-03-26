const db = require('../lib/db');


const Ravintolat = {
  //getAll: function(id, Tila, callback) {
 //   return db.query('select saldo from tili JOIN kortti ON tili.idTili=kortti.tili_idTili where idKortti=? AND Tila=?', [id, Tila], callback);
 // },
  getAll: function(callback) {
    return db.query('select * from Ravintola', callback);
  },
  getById: function(id, callback) {         
    return db.query('select * from Ravintola  where idRavintola=?', [id], callback);         // tasta tulee Ravintolan tiedot idlla 
  },
};
module.exports = Ravintolat;