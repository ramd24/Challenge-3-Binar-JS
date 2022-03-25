const bcrypt = require('bcrypt')

global.users = [
    {
        id: 84758945398454395,
        username: 'username',
        password: 'password'
    }
]

const express = require("express");
const expressLayouts = require('express-ejs-layouts')
const app = express();
const routers = require('./routers')
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const port = 2000;
// const routers = require('./routers')

app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(express.static('public'))

app.use(express.urlencoded({ extended: false })) // untuk mengirim data dari form melalui parameter req
app.use(express.json())

app.use(flash())
app.use(session({
    secret: 'fejsbinar',
    resave: false,
    saveUninitialized: false
}))


app.use(passport.initialize())
app.use(passport.session())

app.use((req, res, next) => {
    req.app.set('layout', 'layouts/default')
    next()
})
  
app.get('/', (req, res) => res.render('index'))
app.post('/logout', (req, res) => {
    req.logout()
    res.redirect('/auth/login')
})
app.use('/dashboard/', routers.dashboard)
app.use('/car/', routers.car)
app.use('/auth/', routers.auth)

app.listen(port)