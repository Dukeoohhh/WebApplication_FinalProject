var express = require("express");
var router = express.Router();
// var database = require("../database");

router.get("/", (req, res, next) => {
    res.render("order/Order", { title: "Order" });
});

router.get("/flavor", (req, res, next) => {
  res.render("order/Flavor", { title: "Flavor" });
});

router.get("/topping", (req, res, next) => {
  res.render("order/Topping", { title: "Topping" });
});

router.get("/sauce", (req, res, next) => {
  res.render("order/Sauce", { title: "Sauce" });
});

router.get("/package", (req, res, next) => {
  res.render("order/Package", { title: "Package" });
});

module.exports = router;