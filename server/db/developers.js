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
    .leftJoin('developersLanguages', 'developersLanguages.developer_id', 'developers.id')
    .leftJoin('languages', 'developersLanguages.language_id', 'languages.id')
    .select(
      'developers.id as id',
      'profile_picture as profilePic',
      'first_name as firstName',
      'last_name as lastName',
      'pronoun', 'bio',
      'projects.id as projectId',
      'projects.image as projectImage',
      'projects.name as projectName',
      'link',
      'email',
      'languages.id as languageId',
      'languages.name as languageName'
    )
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
        projects: !result.some(devs => devs.id) ? [] : result.map(project => {
          return {
            projectId: project.projectId,
            projectImage: project.projectImage,
            projectName: project.projectName,
            link: project.link
          }
        }),
        languages: !result.some(devs => devs.id) ? [] : result.map(language => {
          return {
            languageId: language.languageId,
            languageName: language.languageName
          }
        })
      }
    })
}
// TODO: PUT IN PSEUDONYMS FOR SELECTING ALL DEVELOPERS

// projectImage: dev.projectImage,
// projectName: dev.projectName,
// link: dev.link

// function developersListHelper (arr, key, value) {
//   const listItems = !arr.some((devs) => devs.id) ? [] : arr.map((item) => {
//     return {}
//   })
//   console.log('in the hlper', listItems)
// }

// !result.some(devs => devs.id) ? [] : result.map(project => {
//   return {
//     projectId: project.projectId,
//     projectImage: project.projectImage,
//     projectName: project.projectName,
//     link: project.link
//   }
// })