exports.seed = function (knex) {
  return knex('developersLanguages').insert([
    { id: 1, developer_id: 1, language_id: 1 },
    { id: 2, developer_id: 1, language_id: 2 },
    { id: 3, developer_id: 2, language_id: 2 },
    { id: 4, developer_id: 2, language_id: 3 },
    { id: 5, developer_id: 3, language_id: 2 },
    { id: 6, developer_id: 4, language_id: 1 },
    { id: 7, developer_id: 5, language_id: 1 },
    { id: 8, developer_id: 6, language_id: 1 },
    { id: 9, developer_id: 7, language_id: 1 },
    { id: 10, developer_id: 8, language_id: 1 },
    { id: 11, developer_id: 9, language_id: 1 },
    { id: 12, developer_id: 10, language_id: 1 },
    { id: 13, developer_id: 11, language_id: 1 },
    { id: 14, developer_id: 12, language_id: 1 },
    { id: 15, developer_id: 13, language_id: 1 },
    { id: 16, developer_id: 14, language_id: 1 },
    { id: 17, developer_id: 15, language_id: 1 },
    { id: 18, developer_id: 16, language_id: 1 },
    { id: 19, developer_id: 17, language_id: 1 },
    { id: 20, developer_id: 18, language_id: 1 },
    { id: 21, developer_id: 19, language_id: 1 },
    { id: 22, developer_id: 19, language_id: 2 }
  ])
}
