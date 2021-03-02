exports.up = function (knex) {
  return knex.schema.table('developers', table => {
    table.dropColumn('languages')
    table.dropColumn('platforms')
    table.dropColumn('locations')
    table.dropColumn('projects_id')
    table.string('email')
    table.unique('email')
  })
}

exports.down = function (knex) {

}
