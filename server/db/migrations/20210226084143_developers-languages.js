exports.up = function (knex) {
  return knex.schema.createTable('developersLanguages', table => {
    table.increments('id')
    table.integer('developer_id').references('developers.id')
    table.integer('language_id').references('languages.id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('developersLanguages')
}
