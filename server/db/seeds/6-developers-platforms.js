exports.seed = function (knex) {
  return knex('developersPlatforms').insert([
    { id: 1, developer_id: 1, platform_id: 1 },
    { id: 2, developer_id: 1, platform_id: 1 },
    { id: 3, developer_id: 2, platform_id: 2 },
    { id: 4, developer_id: 3, platform_id: 2 },
    { id: 5, developer_id: 4, platform_id: 2 },
    { id: 6, developer_id: 5, platform_id: 2 },
    { id: 7, developer_id: 6, platform_id: 3 },
    { id: 8, developer_id: 7, platform_id: 3 },
    { id: 9, developer_id: 8, platform_id: 3 },
    { id: 10, developer_id: 9, platform_id: 3 },
    { id: 12, developer_id: 10, platform_id: 3 }
  ])
}
