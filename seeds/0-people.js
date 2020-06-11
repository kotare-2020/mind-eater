
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('people').del()
    .then(function () {
      // Inserts seed entries
      return knex('people').insert([
        { id: 10001, name: 'Derek', food_id: 20001 },
        { id: 10002, name: 'George', food_id: 20002 },
        { id: 10003, name: 'Jefferson', food_id: 20003 },
        { id: 10004, name: 'Joe', food_id: 20004 },
        { id: 10005, name: 'Reuben', food_id: 20005 },
        { id: 10006, name: 'Ben M', food_id: 20006 },
        { id: 10007, name: 'Marta', food_id: 20007},
        { id: 10008, name: 'Fai', food_id: 20008 },
        { id: 10009, name: 'Andy', food_id: 20009 },
        { id: 10010, name: 'Richard', food_id: 20010 },
        { id: 10011, name: 'Rose', food_id: 20011 },
        { id: 10012, name: 'Ben I', food_id: 20012 },
        { id: 10013, name: 'Aisyah', food_id: 20013 },
        { id: 10014, name: 'Jayden', food_id: 20014 }
      ])
    })
}