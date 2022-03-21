var mysql = require('mysql');

/*var connection = mysql.createPool(process.env.MYSQL);*/
var connection = mysql.createConnection({
	host:'localhost',
	user:'newAdmin',
	password:'newPass',
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