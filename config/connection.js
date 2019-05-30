const mysql = require('mysql')

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'androosk',
  password: '1234',
  database: 'burgers_db'
})

connection.connect()

module.exports = connection
