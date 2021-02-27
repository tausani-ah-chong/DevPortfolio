exports.seed = function (knex) {
  return knex('platforms').insert([
    { id: 1, name: 'Web Development' },
    { id: 2, name: 'Mobile Development' },
    { id: 3, name: 'Software' }
  ])
}
