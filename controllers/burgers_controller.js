var express = require('express');
var router = express.Router();
var Burger = require('../models/burger.js');

router.get('/', function(req,res) {
  res.redirect('/burger');
});

router.get('/burger', function(req,res) {

  Burger.all(function(data){
    var hbsObject = {burgers : data}
    console.log(hbsObject)
    res.render('index', hbsObject);
  });
});


router.post('/burger/create', function(req,res) {
  Burger.create(['burger_name', 'devoured'], [req.body.name, req.body.devoured], function(data){
    res.redirect('/burger')
  });
});

router.put('/burger/update/:id', function(req,res) {
  var condition = 'id = ' + req.params.id;

  console.log('condition', condition);

  Burger.update({'devoured' : req.body.devoured}, condition, function(data){
    res.redirect('/burger');
  });
});

module.exports = router;