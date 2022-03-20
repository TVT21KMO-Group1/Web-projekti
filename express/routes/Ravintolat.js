const { response } = require('express');
const express = require('express')


const router = express.Router()
const Ravintolat = require('../models/RavintolatModel')


router.get('/', (req,res) => {
    Ravintolat.getAll(function(err, dbResult) {
        if(err) {
            res.json(errori);
        } else { 
            response.json(asdfasdf); 
        }
    })})
        //res.send('err');} /// t'h'n asti toimii
        
                                   

/*
router.get('/Ravintolat/:ravintolaId', (req,res) => {
    let foundIndex = -1;                                        //hae käyttäjä IDllä
    for(let i = 0; i< users.length; i++){
        if(users[i].id === req.params.userId){
            foundIndex = i;
            break;
        }
    }
    if (foundIndex === -1){
        res.sendStatus(404);
    } else {
        res.json(users[foundIndex]);
    }
})

router.get('/:userName', (req,res) => {                                             //hae käyttäjä nimellä
    let foundName = "wwwwww";
    for(let i = 0; i< users.length; i++){
        if(users[i].name === req.params.userName){
            foundName = req.params.userName;
            res.json(users[i].id)
            break;
        }}
        if (foundName == "wwwwww"){
            res.sendStatus(404);
        }
         else {
            
        }
    }
)

router.delete('/:usersId', (req,res)=> {                                //poista käyttäjä
    let foundUser = users.findIndex(t=> t.id === req.params.usersId);
    if(foundUser === -1) {
        res.sendStatus(404);
    } else {
        users.splice(foundUser, 1);
        res.sendStatus(202);
    }
})

router.post('/', (req, res) => {                            //lisää käyttäjä
    users.push({
        id: uuidv4(),
        name: req.body.name,
        lname: req.body.lname,
        osoite: req.body.osoite,
    });
    res.sendStatus(201);
})

router.put('/:userId', (req, res) => {                                  //muokkaa käyttäjää
    let foundUser = users.find(t => t.id === req.params.userId);
    if(foundUser ) {
        foundUser.name = req.body.name;
        foundUser.lname = req.body.lname;
        foundUser.address = req.body.address;
        res.sendStatus(202);
    }
    else {
        res.sendStatus(404)
    }
})


*/
module.exports = router