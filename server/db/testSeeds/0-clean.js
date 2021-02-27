exports.seed = knex => {
  const empty = table =>
    () => knex(table).del()

  return empty('developers')()
    .then(empty('developersProjects'))
    .then(empty('developersLanguages'))
    .then(empty('developersPlatforms'))
    .then(empty('platforms'))
    .then(empty('projects'))
    .then(empty('languages'))
  // .then(empty('table_name'))
}
