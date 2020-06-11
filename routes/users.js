const express = require('express')

const db = require('../db')

const router = express.Router()

// Example get route, just setting up another below to test the hbs stuff
// router.get('/', (req, res) => {
//   db.getUsers()
//     .then(users => {
//       res.render('index', {users: users})
//     })
//     .catch(err => {
//       res.status(500).send('DATABASE ERROR: ' + err.message)
//     })
// })

router.get('/', (req, res) => {
  res.render('./pages/index')
})

module.exports = router
