const connection = require('./connection')

module.exports = {
  getDevelopers,
  getDeveloperById
}

function getDevelopers (db = connection) {
  return db('developers').select()
}

function getDeveloperById (id, db = connection) {
  return db('developers')
    .leftJoin('developersProjects', 'developersProjects.developer_id', 'developers.id')
    .leftJoin('projects', 'developersProjects.project_id', 'projects.id')
    .select('developers.id as id', 'profile_picture as profilePic', 'first_name as firstName', 'last_name as lastName', 'pronoun', 'bio', 'projects.id as projectId', 'projects.image as projectImage', 'name as projectName', 'link', 'email')
    .where('developers.id', id)
    .then(result => {
      const dev = result[0]
      return {
        id: dev.id,
        profilePic: dev.profilePic,
        firstName: dev.firstName,
        lastName: dev.lastName,
        pronoun: dev.pronoun,
        bio: dev.bio,
        email: dev.email,
        projects: !result.some(evts => evts.id) ? [] : result.map(project => {
          return {
            projectId: project.projectId,
            projectImage: project.projectImage,
            projectName: project.projectName,
            link: project.link
          }
        })
      }
    })
}

// projectImage: dev.projectImage,
// projectName: dev.projectName,
// link: dev.link