const connection = require('./connection')

module.exports = {
  getDevelopers,
  devProjects
}

function getDevelopers(db = connection) {
  return db('developers').select()
}

function devProjects (id, db = connection) {
  return db('developers')
    .leftJoin('developersProjects', 'developersProjects.developer_id', 'developers.id')
    .leftJoin('projects', 'developersProjects.project_id', 'projects.id')
    .select('profile_picture as profilePic', 'first_name as firstName', 'last_name as lastName', 'pronoun', 'bio', 'projects.image as projectImage', 'projects.name as projectName', 'link', 'email')
    .where('developers.id', id)
    .then(result => {
      const dev = result[0]
      return {
        profilePic: dev.profilePic,
        firstName: dev.firstName,
        lastName: dev.lastName,
        pronoun: dev.pronoun
      }
    })
}
