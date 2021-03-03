exports.up = function (knex) {
  return knex.schema.createTable('languages', table => {
    table.increments('id')
    table.string('name')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('languages')
}
