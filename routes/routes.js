const express = require('express')
const db = require('../db')
const router = express.Router()

router.get('/foodis/:id', (req, res) => {
 
  const id = req.params.id
  
  let pageData = {}

  db.getRandomFoodId()
   
  .then(data => {
 
   pageData.randomFood = data.name
  
   
   db.getPeopleAndFavFood(id).then(data =>{
    
    pageData.people_name = data.people_name
    pageData.food_name = data.food_name
    console.log(pageData);     
    })
  
  }).then(

    res.render('foodis', {pageData:pageData})
  )
  .catch((err)=>{

    console.log(err);
    
  })
   

  })



  
  // .then(res.render('foodis',{ pagedata: pageData }))








router.get('/', (req, res) => {
  db.getPeopleData()
    .then(people => res.render('./pages/landing-page', people)
    )
})



module.exports = router