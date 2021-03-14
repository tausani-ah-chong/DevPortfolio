exports.up = function (knex) {
  return knex.schema.createTable('developersPlatforms', table => {
    table.increments('id').primary()
    table.integer('developer_id').references('developers.id')
    table.integer('platform_id').references('platforms.id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('developersPlatforms')
}
