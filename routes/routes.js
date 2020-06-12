const express = require('express')
const db = require('../db')
const router = express.Router()

router.get('/foodis/:id', (req, res) => {

  const id = req.params.id

  let pageData = {}

  db.getRandomFoodId()
    .then(food => {
      db.getPeopleAndFavFood(id)
        .then(data => {
        console.log("heyywruywg", data)
        pageData.people_name = data.people_name
        pageData.food_name = data.food_name
        pageData.randomFood = food.name
        return pageData
      })
      .then(() => {
        console.log(pageData)
        res.render('foodis', { pageData: pageData })

    })
    })
    .catch((err) => {
      console.log(err);
    })
})




// .then(res.render('foodis',{ pagedata: pageData }))








router.get('/', (req, res) => {
  db.getPeopleData()
    .then(people => {
      res.render('./pages/landing-page', { people })
    })
})



module.exports = router