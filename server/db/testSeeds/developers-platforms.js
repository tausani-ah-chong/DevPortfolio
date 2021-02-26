exports.seed = function (knex) {
  return knex('developersPlatforms').insert([
    { id: 1, developer_id: 1, platform_id: 1 },
    { id: 2, developer_id: 1, platform_id: 2 },
    { id: 3, developer_id: 2, platform_id: 2 },
    { id: 4, developer_id: 3, platform_id: 3 }
  ])
}
