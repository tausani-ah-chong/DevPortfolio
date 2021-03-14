exports.up = function (knex) {
  return knex.schema.createTable('developersProjects', table => {
    table.increments('id').primary()
    table.integer('developer_id').references('developers.id')
    table.integer('project_id').references('projects.id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('developersProjects')
}
