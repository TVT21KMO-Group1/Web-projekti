var mysql = require('mysql');

/*var connection = mysql.createPool(process.env.MYSQL);*/
var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'Aurinko!2021',
	database:'webdatabase'
});
connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Connected..!');
	}
});

module.exports = connection;