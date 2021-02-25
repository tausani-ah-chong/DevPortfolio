exports.seed = function (knex) {
  return knex('developers').insert([
    { id: 1, profile_picture: '', first_name: 'multi', last_name: 'Ah Foon', pronoun: 'him/he', bio: 'lorem ipsum' },
    { id: 2, profile_picture: '', first_name: 'sani', last_name: 'Ah Foon', pronoun: 'him/he', bio: 'lorem ipsum' },
    { id: 3, profile_picture: '', first_name: 'anna', last_name: 'Fowler', pronoun: 'her/she', bio: 'lorem ipsum' }
  ])
}
