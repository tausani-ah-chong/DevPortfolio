exports.seed = knex => {
  const empty = table =>
    () => knex(table).del()

  return empty('projects')()
    .then(empty('developers'))
  // .then(empty('table_name'))
}
