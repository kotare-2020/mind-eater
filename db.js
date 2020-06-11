const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getPeopleData: getPeopleData,
}

function getPeopleData ( db = connection ) {
  return db('people').select()
}

