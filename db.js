const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getRandomFoodId: getRandomFoodId
}


function getRandomFoodId (db = connection) {
  
  const id = Math.floor(Math.random(99901, 99926))
  
  return db('users').where('id', id)

}


// function getLatestUserId(db = connection) {
//   let lastIndex
//   return db('users')
//     .then(data => {
//       lastIndex = data.length - 1
//       console.log(data[lastIndex])
//       return data[lastIndex]
//     })
//     .then(data => {
//       console.log(data.id)
//       return data.id
//     })

// }