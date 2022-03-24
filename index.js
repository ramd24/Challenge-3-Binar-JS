const express = require("express");
const expressLayouts = require('express-ejs-layouts')
const app = express();
const port = 2000;
// const routers = require('./routers')

app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(express.static('public'))

app.use((req, res, next) => {
    req.app.set('layout', 'layout')
    next()
})
  
app.get('/', (req, res) => res.render('index'))

app.listen(port)