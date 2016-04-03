var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Death = mongoose.model('Death');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET the Death Rates */
router.get('/death', function(req, res, next) {
  Death.find(function(err, death){
    if(err){ return next(err); }

    res.json(death);
  });
});

module.exports = router;
