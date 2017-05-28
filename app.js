// Setting up modules
var express = require('express')
var app = express()
var ejsLayouts = require('express-ejs-layouts')
var methodOverride = require('method-override')
var path = require('path')
var bodyParser = require('body-parser')
// require dotenv
require('dotenv').config()

// setup views and static folder
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'app/views'))
// app.use(express.static(path.join(__dirname, '/public')))
app.use(express.static(path.join(__dirname, '/app/assets')))

// setup ejsLayouts
app.use(ejsLayouts)

// setup middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

// import index router
const routes = require('./config/router')
app.use('/', routes)

// set port and listen
var newport = process.env.PORT || 5000
app.set('port', (newport))
app.listen(app.get('port'), function() {
    console.log('myportfolio http://localhost ' + newport)
})
