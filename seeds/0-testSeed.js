exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('testTable').del()
    .then(function () {
      // Inserts seed entries
      return knex('testTable').insert([
        { id: 1, name: 'Steve', description: 'eyes so beautiful theyre dangerous' },
        { id: 2, name: 'Tausani', description: 'beats so huge they might burst your eardrums' },
        { id: 3, name: 'Multi', description: 'heart so big hes got love for everyone' },
        { id: 4, name: 'Christo', description: 'muscles so huge he can lift things up and then put them down ' }

      ])
    })
}
