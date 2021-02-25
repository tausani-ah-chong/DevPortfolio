exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('developers').del()
    .then(function () {
      // Inserts seed entries
      return knex('developers').insert([
        { id: 1, uuid: 'rowValue1', projects_id: 1, profile_picture: '', first_name: 'multi', last_name: 'Ah Foon', pronoun: 'him/he', bio: 'lorem ipsum', languages: [], platforms: [], locations: [] },
        { id: 2, uuid: 'rowValue2', projects_id: 2, profile_picture: '', first_name: 'multi', last_name: 'Ah Foon', pronoun: 'him/he', bio: 'lorem ipsum', languages: [], platforms: [], locations: [] },
        { id: 3, uuid: 'rowValue3', projects_id: 3, profile_picture: '', first_name: 'multi', last_name: 'Ah Foon', pronoun: 'him/he', bio: 'lorem ipsum', languages: [], platforms: [], locations: [] }
      ])
    })
}
