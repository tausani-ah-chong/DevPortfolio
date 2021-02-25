exports.seed = function (knex) {
  return knex('developersProjects').insert([
    { id: 1, developer_id: 1, project_id: 1 },
    { id: 2, developer_id: 2, project_id: 2 },
    { id: 3, developer_id: 3, project_id: 3 }
  ])
}
