exports.seed = function (knex) {
  return knex('developersPlatforms').insert([
    { id: 1, developer_id: 1, platform_id: 1 },
    { id: 2, developer_id: 1, platform_id: 2 },
    { id: 3, developer_id: 2, platform_id: 2 },
    { id: 4, developer_id: 3, platform_id: 3 },
    { id: 5, developer_id: 4, platform_id: 3 },
    { id: 6, developer_id: 5, platform_id: 3 },
    { id: 7, developer_id: 6, platform_id: 3 },
    { id: 8, developer_id: 7, platform_id: 3 },
    { id: 9, developer_id: 8, platform_id: 3 },
    { id: 10, developer_id: 9, platform_id: 3 },
    { id: 12, developer_id: 10, platform_id: 3 },
    { id: 13, developer_id: 11, platform_id: 3 },
    { id: 14, developer_id: 12, platform_id: 3 },
    { id: 15, developer_id: 13, platform_id: 3 },
    { id: 16, developer_id: 14, platform_id: 3 },
    { id: 17, developer_id: 15, platform_id: 3 },
    { id: 18, developer_id: 16, platform_id: 3 },
    { id: 19, developer_id: 17, platform_id: 3 },
    { id: 20, developer_id: 18, platform_id: 3 },
    { id: 21, developer_id: 19, platform_id: 3 }
  ])
}
