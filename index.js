global.users = []


//dummy array
global.cars = [
    {
        id: '1',
        name: 'A',
        category: 'Minibus',
        price: '100000',
        startRent: '1 Januari 2020',
        finishRent: '1 Februari 2020',
        updatedAt: '1 Januari 2020',
        createdAt: '1 Januari 2020',
    },
    {
        id: '2',
        name: 'Honda',
        category: 'sedan',
        price: '200000',
        startRent: '1 Januari 2020',
        finishRent: '1 Februari 2020',
        updatedAt: '1 Januari 2020',
        createdAt: '1 Januari 2020',
    },
    {
        id: '3',
        name: 'A',
        category: 'Minibus',
        price: '100000',
        startRent: '1 Januari 2020',
        finishRent: '1 Februari 2020',
        updatedAt: '1 Januari 2020',
        createdAt: '1 Januari 2020',
    },
    {
        id: '4',
        name: 'Honda',
        category: 'sedan',
        price: '200000',
        startRent: '1 Januari 2020',
        finishRent: '1 Februari 2020',
        updatedAt: '1 Januari 2020',
        createdAt: '1 Januari 2020',
    },
]

global.orders = [
    {
        id: '1',
        userEmail: 'aqwe@asd.com',
        car: 'Toyota',
        startRent: '1 Januari 2020',
        finishRent: '1 Februari 2020',
        price: '100000',
        status: 'process'
    },
    {
        id: '2',
        car: 'Honda',
        userEmail: 'jfklsjf@asd.com',
        startRent: '1 Januari 2020',
        finishRent: '1 Februari 2020',
        price: '200000',
        status: 'done'
    },
    {
        id: '3',
        userEmail: 'aqwe@asd.com',
        car: 'Toyota',
        startRent: '1 Januari 2020',
        finishRent: '1 Februari 2020',
        price: '100000',
        status: 'process'
    },
    {
        id: '4',
        car: 'Honda',
        userEmail: 'jfklsjf@asd.com',
        startRent: '1 Januari 2020',
        finishRent: '1 Februari 2020',
        price: '200000',
        status: 'done'
    },
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