exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { id: 1, name: 'rowValue1', image: '', link: '' },
        { id: 2, name: 'rowValue2', image: '', link: '' },
        { id: 3, name: 'rowValue3', image: '', link: '' }
      ])
    })
}
