exports.seed = function (knex) {
  return knex('projects').insert([
    { id: 1, name: 'rowValue1', image: 'image link', link: 'website link' },
    { id: 2, name: 'rowValue2', image: 'image link', link: 'website link' },
    { id: 3, name: 'rowValue3', image: 'image link', link: 'website link' }
  ])
}
