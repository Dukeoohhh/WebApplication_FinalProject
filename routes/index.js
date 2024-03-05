var express = require('express');
var router = express.Router();
var database = require('../database');


/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {title: 'Home'});
});

module.exports = router;
