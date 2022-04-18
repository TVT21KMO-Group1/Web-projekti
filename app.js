var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var flash = require('express-flash');
var session = require('express-session');
var mysql = require('mysql');
var connection  = require('./lib/db');
const helmet = require('helmet');
const cors = require('cors');
var cloudinary = require('cloudinary').v2;
var { CloudinaryStorage } = require('multer-storage-cloudinary');
var multer = require('multer');
//var app = express();
var bodyParser = require('body-parser');
const port = 3306
const app           = express(),  
      DEFAULT_PORT  = 3306


      
app.use(helmet());
const dotenv = require('dotenv');
dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Config cloudinary storage for multer-storage-cloudinary
var storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: ''
  },
});

var parser = multer({ storage: storage });
// You can store key-value pairs in express, here we store the port setting
app.set('port', (process.env.PORT || 80));

/* //Jotain hamaraa tassa hommelissa, en tieda mita tekee
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

*/
app.use(express.static('build'))



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var KayttajaRouter = require('./routes/Kayttaja')
var RavintolatRouter = require('./routes/Ravintolat');
var loginRouter = require('./routes/login');
var ruokaRouter = require('./routes/ruoka');
var tuotekategoriaRouter = require('./routes/tuotekategoria');
var tilausRouter = require('./routes/tilaus');
var tilatuttuotteetRouter = require('./routes/tilatuttuotteet')
var tilausHistoriaRouter = require('./routes/tilausHistoria')
//var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  cookie: { maxAge: 60000 },
  store: new session.MemoryStore,
  saveUninitialized: true,
  resave: 'true',
  secret: 'secret'
}))

app.use(flash());

app.use(cors());


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Ravintolat', RavintolatRouter);
app.use('/Kayttaja', KayttajaRouter);
app.use('/login', loginRouter);
app.use('/ruoka', ruokaRouter);
app.use('/tuotekategoria', tuotekategoriaRouter);
app.use('/tilaus', tilausRouter);
app.use('/tilatuttuotteet', tilatuttuotteetRouter);
app.use('/tilausHistoria', tilausHistoriaRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// POST route for reciving the uploads. multer-parser will handle the incoming data based on the 'image' key
// Once multer has completed the upload to cloudinary, it will come to the handling function
// below, which then sends the 201 (CREATED) response. Notice that error handling has not been properly implemented.
app.post('/upload', parser.single('image'), function (req, res) {
  console.log(req.file);
  res.status(201);
  res.json(req.file);
});


app.listen(app.get(process.env.PORT ||80), function(){})

module.exports = app;
