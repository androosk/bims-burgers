const express = require('express')
const methodOverride = require('method-override')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

const routes = require('./controllers/burgers_controller.js')

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false}))

app.use(methodOverride('_method'))

app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use('/', routes)

app.listen(PORT, ()=> {
  console.log(`Server is running at PORT ${PORT}`)
})
