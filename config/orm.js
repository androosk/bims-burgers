const connection = require('./connection')

const orm = {
  selectAll: function(cb) {
    const sqlQuery = 'SELECT * FROM burgers'
    connection.query(sqlQuery, (err, data)=>{
      if (err) { throw(err) }
      cb(data)
    })
  },
  insertOne: function(burger, cb) {
    const sqlQuery = 'INSERT INTO burgers (burger_name, devoured) VALUES (?, 0)'
    connection.query(sqlQuery, [burger], (err, data)=>{
      if (err) { throw(err) }
      cb(data)
    })
  },
  updateOne: function(id, cb) {
    const sqlQuery = 'UPDATE burgers SET devoured = 1 WHERE id = ?'
    connection.query(sqlQuery, [id], (err, data)=>{
      if (err) { throw(err) }
      cb(data)
    })
  }
}

module.exports = orm
