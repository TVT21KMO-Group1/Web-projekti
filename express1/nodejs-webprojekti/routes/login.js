const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const login = require('../models/login_model');


router.post('/', 
function(request, response) {
  if(request.body.idKayttaja && request.body.Salasana){
    const username = request.body.idKayttaja;
    const password = request.body.Salasana;
      login.checkPassword(username, function(dbError, dbResult) {
        if(dbError){
          response.json(dbError);
        }
        else{
          if (dbResult.length > 0) {
            bcrypt.compare(password,dbResult[0].Salasana, function(err,compareResult) {
              if(compareResult) {
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