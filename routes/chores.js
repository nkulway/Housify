var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize')
const { Member } = require('../models')

router.get('/', (req, res) => {
    res.send('respond with a resource')
})

module.exports = router;