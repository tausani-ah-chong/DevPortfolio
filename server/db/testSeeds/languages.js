exports.seed = function (knex) {
  return knex('languages').insert([
    { id: 1, name: 'JS' },
    { id: 2, name: 'C#' },
    { id: 3, name: 'TS' }
  ])
}
