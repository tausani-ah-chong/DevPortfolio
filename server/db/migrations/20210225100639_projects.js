exports.up = function (knex) {
  return knex.schema.createTable('projects', table => {
    table.increments('id')
    table.string('name')
    table.string('image')
    table.string('link')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('projects')
}
