var express = require('express');
var router = express.Router();
const partials = require('../partials')
const Sequelize = require('sequelize')
const { Member } = require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { partials, locals: {title: 'Express' }});
});


router.get('/heartbeat', (req, res) => {
  res.json({
      "is": "working"
  })
})



module.exports = router;
