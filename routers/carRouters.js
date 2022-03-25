
const express = require('express')
const carController = require('../controllers/carController')
const router = express.Router()
const authChecker = require('../lib/authentication-checker')

router.use(authChecker.isUserAuthenticated)

router.use((req, res, next) => {
    req.app.set('layout', 'layouts/car')
    next()
})

router.get('/', carController.index)
router.get('/add-car', carController.addCar)


module.exports = router