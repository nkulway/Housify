var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize')
const { Member } = require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/heartbeat', (req, res) => {
  res.json({
      "is": "working"
  })
})



module.exports = router;
