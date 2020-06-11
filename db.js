const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getRandomFoodId: getRandomFoodId,
  getPeopleData: getPeopleData
}

function getRandomFoodId (db = connection) {
 
  const id = Math.floor(Math.random(99901, 99926))
  
  return db('users').where('id', id)

}

function getPeopleData ( db = connection ) {
  return db('people').select()
}
