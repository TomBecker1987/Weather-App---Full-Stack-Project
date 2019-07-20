const express = require('express')
const path = require('path')
const app = express()
const request = require('request');
const api = require('./routes/api')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/weatherDB', {useNewUrlParser: true})


app.use(express.static(path.join(__dirname,'..', 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', api)



const port = 3000
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})
