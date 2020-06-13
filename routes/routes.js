const express = require('express')
const db = require('../db')
const router = express.Router()

router.get('/foodis/:id', (req, res) => {

  const id = req.params.id

  let pageData = {}

  db.getRandomFoodId()

    .then(data => {

      pageData.randomFood = data.name


      db.getPeopleAndFavFood(id).then(data => {

        pageData.people_name = data.people_name
        pageData.food_name = data.food_name
      })

    }).then(() => {
      console.log(pageData)
      res.render('foodis', { pageData: pageData })
    })
    .catch((err) => {
      console.log(err);
    })
})

//  function googleSearch (quest){
//   let googlefind = quest + " recipes";
//   window.open("http://www.google.com/search?hl=en&q=" + escape(googlefind));
//  }




// .then(res.render('foodis',{ pagedata: pageData }))








router.get('/', (req, res) => {
  db.getPeopleData()
    .then(people => {
      res.render('./pages/landing-page', { people })
    })
})



module.exports = router