const db = require('../lib/db');


const tuotekategoria = {
  //getAll: function(id, Tila, callback) {
 //   return db.query('select saldo from tili JOIN kortti ON tili.idTili=kortti.tili_idTili where idKortti=? AND Tila=?', [id, Tila], callback);
 // },
  getAll: function(callback) {
    return db.query('select * from webdatabase.Tuotekategoria', callback);
  },
  getById: function(Ravintola_idRavintola, callback) {         
    return db.query('select Tuotekategoria from Tuotekategoria  where Ravintola_idRavintola=? ', [Ravintola_idRavintola], callback);         // tasta tulee Ravintolan tiedot idlla 
  },
};
module.exports = tuotekategoria;