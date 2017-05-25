// Setting up modules
var express = require('express')
var app = express()
var ejsLayouts = require('express-ejs-layouts')
var methodOverride = require('method-override')
var path = require('path')
var bodyParser = require('body-parser')
// require dotenv
require('dotenv').config()
var GOOGLE_API = process.env.GOOGLE_API

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
app.set('port', (5000))
app.listen(app.get('port'), function() {
    console.log('My PortFolio open on http://localhost:' + app.get('port'))
})
