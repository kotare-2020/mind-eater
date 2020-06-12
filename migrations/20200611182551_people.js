
exports.up = (knex, Promise) => {
    return knex.schema.createTable('people', (table) => {
      table.increments('id').primary()
      table.string('name')
      table.integer('food_id')
    })
  }
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('people')
  }
