exports.up = function (knex) {
  return knex.schema.createTable('developers', table => {
    table.increments('id')
    table.string('uuid')
    table.integer('projects_id').references('projects.id')
    table.string('profile_picture')
    table.string('first_name')
    table.string('last_name')
    table.string('pronoun')
    table.string('bio')
    table.string('languages')
    table.string('platforms')
    table.string('locations')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('developers')
}
