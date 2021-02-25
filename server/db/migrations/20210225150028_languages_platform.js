exports.up = function (knex) {
  return knex.schema.table('developers', table => {
    table.dropColumn('languages')
    table.dropColumn('platforms')
    table.dropColumn('locations')
    table.dropColumn('projects_id')
    table.integer('project_id').references('projects.id')
    table.integer('language_id').references('languages.id')
    table.integer('platform_id').references('platforms.id')
    table.string('location')
  })
}

exports.down = function (knex) {
  // return knex.schema.table('developers', table => {
  //   table.dropColumns('project_id', 'language_id', 'platform_id', 'location')
  // })
}
