const db = require('../lib/db');


const ostosHistoria = {

  getAll: function(callback) {
    return db.query('select Aika, Summa from tilaus', callback);
  },
};

module.exports = ostosHistoria;