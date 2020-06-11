const express = require('express')
const db = require('../db')
const router = express.Router()

router.get('/foodis/:id', (req, res) => {
  const id = req.params.id
  db.getRandomFoodId().then(id => {
    res.render('foodis', { id: id })
  })
})

router.get('/', (req, res) => {
  db.getPeopleData()
    .then(people => {
      res.render('./pages/landing-page', {people})
    })
})

module.exports = router