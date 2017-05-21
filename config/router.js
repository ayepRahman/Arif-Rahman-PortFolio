const express = require('express')
const router = express.Router()
const homeController = require('../app/controllers/home_controller')

// home route
router.route('/')
    .get(homeController.home)




module.exports = router
