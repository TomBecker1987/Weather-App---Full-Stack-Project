const express = require( 'express' )
const router = express.Router()
const request = require('request');
const path = require('path')
const apiKey = '5853ca744ac84a2aab2175712191807'
const model = require('../model/City')
const City = model.City
const moment = require('moment')

//**********************************************************


router.get('/city/:cityName',function(req,res){
    let cityName = req.params.cityName;
    request(`http://api.apixu.com/v1/current.json?key=${apiKey}&q=${cityName}`,function(err,response){
        res.send(JSON.parse(response.body))
    })
})

router.get('/cities',function(req,res){
    City.find({}, function(err,response){
        res.send(response)
    })
})

router.post('/city/:cityName',function(req,res){
    let cityName = req.params.cityName;
    let data = req.body;
    let city = new City ({
        name: data.name,
        updatedAt: data.updatedAt,
        temperature: data.temperature,
        condition: data.condition,
        conditionPic: data.conditionPic
        })
    city.save()
    res.send(`${cityName} added successfuly to db.`)
})

router.delete('/city/:cityName',function(req,res){
    let cityName = req.params.cityName;
    City.findOneAndDelete({name:cityName},function(err,response){
        res.send(response)
    })
})

//**********************************************************


module.exports = router