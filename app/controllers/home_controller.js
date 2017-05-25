var express = require('express')
var GOOGLE_API = process.env.GOOGLE_API

let homeController = {
    home: function(req, res) {
        res.render('home/home', {GOOGLE_API: GOOGLE_API})

    }
}

module.exports = homeController
