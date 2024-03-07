var express = require("express");
var router = express.Router();
var database = require("../database");

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render('index', {title: 'index'});
});

router.get("/home", (req, res, next) => {
  res.render('home', {title: 'home'});
})

module.exports = router;
