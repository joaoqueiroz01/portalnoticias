var mysql = require('mysql');
	
	var connMySQL = function(){

		console.log('Conexão com DB foi estabelecida');

		return mysql.createConnection({
		host:'localhost',
		user:'root',
		password:'',
		database:'portal_noticias'
		});	
}
	
	module.exports = function()
	{ 	
		
		console.log('O auto load carregou o módulo de conexão co o DB');
		return connMySQL;

	}	