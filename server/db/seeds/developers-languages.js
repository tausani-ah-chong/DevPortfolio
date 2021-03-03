exports.seed = function (knex) {
  return knex('developersLanguages').insert([
    { id: 1, developer_id: 1, language_id: 1 },
    { id: 2, developer_id: 1, language_id: 2 },
    { id: 3, developer_id: 2, language_id: 2 },
    { id: 4, developer_id: 2, language_id: 3 },
    { id: 5, developer_id: 3, language_id: 1 },
    { id: 6, developer_id: 4, language_id: 3 },
    { id: 7, developer_id: 5, language_id: 2 },
    { id: 8, developer_id: 6, language_id: 2 },
    { id: 9, developer_id: 7, language_id: 2 },
    { id: 10, developer_id: 8, language_id: 1 },
    { id: 11, developer_id: 9, language_id: 1 },
    { id: 12, developer_id: 10, language_id: 3 },
    { id: 13, developer_id: 10, language_id: 1 }
  ])
}
