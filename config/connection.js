// Connection to mySql database
const mysql = require('mysql')
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: ''
  })
}

connection.connect()

module.exports = connection
