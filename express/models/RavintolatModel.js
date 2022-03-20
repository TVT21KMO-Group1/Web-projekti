const db = require('../database');


const Ravintolat = {
  //getAll: function(id, Tila, callback) {
 //   return db.query('select saldo from tili JOIN kortti ON tili.idTili=kortti.tili_idTili where idKortti=? AND Tila=?', [id, Tila], callback);
 // },
  getAll: function(callback) {
    return db.query('select Nimi from Ravintolat', callback);
   
  },
};
module.exports = Ravintolat;