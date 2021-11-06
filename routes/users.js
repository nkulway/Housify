var express = require('express');
var router = express.Router();
const Sequelize = require("sequelize")
const { Member } = require("../models")


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


router.get("/add", (req, res) => {
  res.render("familyMember")
})


router.get("/list", async (req, res) => {
  // requesting all of the data from our 'Members' database
const fMember = await Member.findAll();
const html = fMember
  .map((member) => {
          // isolate the id inside of the list to make them unique "member.id"
          // diplay names of people from db
    return `<li id="${member.id}">${member.name}</li>`;
  })
  .join("");
console.log('memberList')
res.render("memberList", {
  locals: {
    fMember: html,
  },
});
});

module.exports = router;
