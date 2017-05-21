var express = require('express')

// controller function
let homeController = {
    home: function(req, res) {
        res.render('home/home')
    }
}

module.exports = homeController
