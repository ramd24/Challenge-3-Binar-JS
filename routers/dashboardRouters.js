const express = require('express')
const router = express.Router()
const dashboardController = require('../controllers/dashboardController')
const authChecker = require('../lib/authentication-checker')

router.use(authChecker.isUserAuthenticated)

router.use((req, res, next) => {
    req.app.set('layout', 'layouts/dashboard')
    next()
})

router.get('/', dashboardController.index)

module.exports = router