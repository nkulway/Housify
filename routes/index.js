var express = require('express');
var router = express.Router();
const partials = require('../partials')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { partials, title: 'Express' });
});

module.exports = router;
