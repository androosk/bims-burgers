// require connection to connection.js so we can connect o database
const connection = require('./connection')

// create our orm for use with the model to query the database
const orm = {
  // This query will get all entries form the "burgers" table. Burger.js uses its functions. It processes a request (cb) to the database
  // If there is an error, it will throw that error to the console and stop the query. Otherwise it will return the query as the data object cb(data)
  selectAll: function(cb) {
    const sqlQuery = 'SELECT * FROM burgers'
    connection.query(sqlQuery, (err, data)=>{
      if (err) { throw(err) }
      cb(data)
    })
  },
  // This query uses two arguments to insert a new burger into the burgers table, burger_name and devoured. Devoured is always set to true (0) initially
  // burger_name is provided from the input value in the index.handlebars
  insertOne: function(burger, cb) {
    const sqlQuery = 'INSERT INTO burgers (burger_name, devoured) VALUES (?, 0)'
    connection.query(sqlQuery, [burger], (err, data)=>{
      if (err) { throw(err) }
      cb(data)
    })
  },
  // This query uses two arguments to set an existing burger to "devoured" = true (1)
  updateOne: function(id, cb) {
    const sqlQuery = 'UPDATE burgers SET devoured = 1 WHERE id = ?'
    connection.query(sqlQuery, [id], (err, data)=>{
      if (err) { throw(err) }
      cb(data)
    })
  }
}

module.exports = orm
