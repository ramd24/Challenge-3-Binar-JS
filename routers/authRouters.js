const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')
const authChecker = require('../lib/authentication-checker')

router.use(authChecker.isUserNotAuthenticated)

router.get('/register', authController.register)
router.get('/login', authController.login)
router.post('/register', authController.post.register)
router.post('/login', authController.post.login)

module.exports = router