var express = require('express')
// var GOOGLE_API = process.env.GOOGLE_API
// controller function
let homeController = {
    home: function(req, res) {
        var GOOGLE_API = process.env.GOOGLE_API
        res.render('home/home', {GOOGLE_API: GOOGLE_API})

    }
}

module.exports = homeController
