const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const login = require('../models/login_model');


router.post('/', 
function(request, response) {
  if(request.body.idKayttaja && request.body.Salasana){
    const idKayttaja = request.body.idKayttaja;
    const Salasana = request.body.Salasana;
    const OnOmistaja = request.body.OnOmistaja;
      login.checkPassword(idKayttaja, function(dbError, dbResult) {
        if(dbError){
          response.json(dbError);
        }
        else{
          if (dbResult.length > 0) {
            bcrypt.compare(Salasana,dbResult[0].Salasana, function(err,compareResult) {
              if(compareResult) {
                  login.checkOnOmistaja(idKayttaja, function(dbError, dbResult) {
                    console.log(dbResult)
                    if (dbResult == "1"){
                      response.send("tottoroo")
                    }
                  })
                console.log("succes");
                response.send(true);
              }
              else {
                  console.log("wrong password");
                  response.send(false);
              }			
            }
            );
          }
          else{
            console.log("user does not exists");
            response.send(false);
          }
        }
        }
      );
    }
  else{
    console.log("username or password missing");
    response.send(false);
  }
}
);


module.exports = router;