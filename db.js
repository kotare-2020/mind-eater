const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getRandomFoodId: getRandomFoodId,
  getPeopleData: getPeopleData,
  getPeopleAndFavFood:getPeopleAndFavFood
}

function getRandomFoodId (db = connection) {
 
  
  min = Math.ceil(20001)
  max = Math.floor(20050)

  const foodId = Math.floor(Math.random( ) *(max-min +1) + min)
  
  // console.log(foodId);
  
   return db('food').where('id',foodId).first()

}


function getPeopleData ( db = connection ) {
  return db('people').select()
}


function getPeopleAndFavFood(id, db = connection) {
  
  
  return db('people').join('food', 'people.food_id','food.id').select('people.name AS people_name', 'food.name AS food_name', 'people.id AS peopleid').where('peopleid', id).first()
  
  //get people
  //join to foods
  //where people id = id
}
