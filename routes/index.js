var express = require('express');
var router = express.Router();
var database = require('../database');


/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {title: 'Home'});
});

router.get('/en', (req, res) => {

  const queryFlavors = 'select distinct * from flavors order by flavor_id';
  const queryPackages = 'select distinct * from packages order by package_id';
  const queryToppings = 'select distinct * from toppings order by topping_id';

  database.query(queryFlavors, (err, fetchFlavors) => {
    if (err) {
      console.log('Failed to query' + err);
      return;
    }

    database.query(queryPackages, (err, fetchPackages) => {
      if (err) {
        console.log('Failed to query' + err);
        return;
      }

      database.query(queryToppings, (err, fetchToppings) => {
        if (err) {
          console.log('Failed to query' + err);
          return;
        }

        res.render('en/home',
          { title: 'English', flavor_data: fetchFlavors, package_data: fetchPackages, topping_data: fetchToppings });
      })
    });
  });
});

/* 
*
*   Thai Language Section Below
*
*/

router.get('/th', (req, res) => {

  const queryFlavors = 'select distinct * from flavors order by flavor_id';
  const queryPackages = 'select distinct * from packages order by package_id';
  const queryToppings = 'select distinct * from toppings order by topping_id';

  database.query(queryFlavors, (err, fetchFlavors) => {
    if (err) {
      console.log('Failed to query' + err);
      return;
    }

    database.query(queryPackages, (err, fetchPackages) => {
      if (err) {
        console.log('Failed to query' + err);
        return;
      }

      database.query(queryToppings, (err, fetchToppings) => {
        if (err) {
          console.log('Failed to query' + err);
          return;
        }

        res.render('th/home',
          { title: 'Thai', flavor_data: fetchFlavors, package_data: fetchPackages, topping_data: fetchToppings });
      })
    });
  });
});


module.exports = router;
