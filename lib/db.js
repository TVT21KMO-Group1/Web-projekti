var mysql = require('mysql');

/*var connection = mysql.createPool(process.env.MYSQL);*/
var connection = mysql.createConnection({
	host:'i54jns50s3z6gbjt.chr7pe7iynqr.eu-west-1.rds.amazonaws.com',
	user:'lmjeg2vp3e8uw2m8',
	password:'b0f01bb97ccv6fo2',
	database:'jyznq86kdd1xhcew'
});
connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Connected..!');
	}
});

module.exports = connection;