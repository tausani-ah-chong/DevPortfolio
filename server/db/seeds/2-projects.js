exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { id: 1, name: 'rowValue1', image: '', link: '' },
        { id: 2, name: 'rowValue2', image: '', link: '' },
        { id: 3, name: 'rowValue3', image: '', link: '' }
      ])
    })
}
