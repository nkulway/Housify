var express = require('express');
var router = express.Router();
const Sequelize = require("sequelize")
const { Member, Chore } = require("../models");
const member = require('../models/member');
const partials = require('../partials')


router.get('/add', (req, res) => {
  res.render('index', { partials, title: 'Express' })
})

router.post("/add", async (req, res) => {
  const { age, email, name } = req.body;

  const newUser = await Member.create({
    age,
    email,
    name,
  });

  res.json({
    id: newUser.id,
  });
});

router.get('/', function(req, res) {
  res.send('respond with a resource');
});


// router.get("/add", (req, res) => {
//   res.render("familyMember")
// })


router.get("/list", async (req, res) => {
  // requesting all of the data from our 'Members' database
const fMember = await Member.findAll()
const chores = await Chore.findAll()
const members = fMember
  .map((member) => {
          // isolate the id inside of the list to make them unique "member.id"
          // diplay names of people from db
    return `
    <li data-id="${member.id}">
    <button id="${member.id}" class="delete">Delete</button>
    ${member.name}
    </li>
    `;
  })
  .join("");
  const choreList = chores
  .map((chore) => {
          // isolate the id inside of the list to make them unique "member.id"
          // diplay names of people from db
    return `
    <li data-id="${chore.id}">
    <button id="${chore.id}" class="delete">Delete</button>
    ${chore.chore}
    </li>
    `;
  })
  .join("");
console.log('memberList')
res.render("memberList", {
  locals: {
    fMember: members,
    chores: choreList,
    
},
partials: { head: partials.head, footer: partials.foot, nav: partials.nav }
});
});


router.post("/edit", async (req, res) => {
  const { name, id } = req.body;
  console.log(req.body)
  const updatedUser = await User.update(req.body, {
    where: {
      id
    }
  });


  res.json({
    message: `You successfully updated ${name}`
  });
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deletedUser = await Member.destroy({
      where: {
          id
      }
  });
  res.json({
    message: `Deleted ${deletedUser}`
  });
});






module.exports = router;