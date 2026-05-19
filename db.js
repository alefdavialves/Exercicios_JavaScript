const mysql = require('mysql2');

const db = mysql.createConnection({

//Credenciais de acesso
  host: 'localhost', //127.0.0.1
  user: 'root',
  password: 'c@tolic@',
  database: 'Userdb_alef',
  port: '3306'
});

//Estabelecer a conexão

db.connect(err => {

    if (err) throw err;
    console.log ("Conectado ao banco de dados");

});

//Exportar módulo de conexão

module.exports = db;
