exports.seed = function (knex) {
  return knex('developersLanguages').insert([
    { id: 1, developer_id: 1, language_id: 1 },
    { id: 2, developer_id: 1, language_id: 2 },
    { id: 3, developer_id: 2, language_id: 3 },
    { id: 4, developer_id: 2, language_id: 2 },
    { id: 5, developer_id: 3, language_id: 2 },
    { id: 6, developer_id: 3, language_id: 1 }
  ])
}
