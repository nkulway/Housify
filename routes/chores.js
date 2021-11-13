var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize')
const { Chore } = require('../models')
const chore = require('../models/chore');
const partials = require('../partials')




router.get('/', (req, res) => {
    res.send('respond with a resource')
})

// router.get('/list', (req, res) => {
//     res.render('choreList')
// })

router.get('/add-chore', (req, res) => {

    res.render('addChore', { partials, title: 'Express' })

    res.render('addChore', {
      partials
    })


})

router.post("/add-chore", async (req, res) => {
    const { chore, day } = req.body;
  
    const newUser = await Chore.create({
      chore,
      day
    });
  
    res.json({
      id: newUser.id,
    });
  });

  router.get("/list", async (req, res) => {
    // requesting all of the data from our 'Members' database
  const todo = await Chore.findAll();
  const html = todo
    .map((chores) => {
            // isolate the id inside of the list to make them unique "member.id"
            // diplay names of people from db
      return `
      <li data-id="${chores.id}">
      <button id="${chores.id}" class="delete">Done</button>
      ${chores.chore}
      </li>
      `;
    })
    .join("");
  console.log('choreList')
  res.render("memberList", {
    locals: {
      todo: html,
    },
  });
  });



module.exports = router;