exports.seed = function (knex) {
  return knex('projects').insert([
    { id: 1, name: 'rowValue1', image: '', link: '' },
    { id: 2, name: 'rowValue1', image: '', link: '' },
    { id: 3, name: 'rowValue2', image: '', link: '' },
    { id: 4, name: 'rowValue3', image: '', link: '' }
  ])
}
