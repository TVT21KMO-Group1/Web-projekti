var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
var app = express();

app.use(helmet());
app.use(cors());
const dotenv = require('dotenv');
dotenv.config();
const basicAuth = require('express-basic-auth');
app.use(basicAuth( { authorizer: myAuthorizer, authorizeAsync:true, } ))

function myAuthorizer(username, password, cb){
    if(username===process.env.authUser && password ===process.env.authPass){
        return cb(null, true);
    }
    else{
        return cb(null, false);
    }
}


const index = require('./routes/index');
const Kayttaja = require('./routes/Kayttaja')
const Ravintolat = require('./routes/Ravintolat')
const Tuotekategoria = require('./routes/Tuotekategoria')
const Ruoka = require('./routes/Ruoka')
const Tilaus = require('./routes/Tilaus.js')
const TilatutTuotteet = require('./routes/TilatutTuotteet')
app.use('/', index);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/Ravintolat', Ravintolat);

module.exports = app;