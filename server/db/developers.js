const connection = require('./connection')

module.exports = {
  getDevelopers,
  getDeveloperById
}

function getDevelopers (db = connection) {
  return db('developers').select(
    'id',
    'profile_picture as profilePicture',
    'first_name as firstName',
    'last_name as lastName',
    'pronoun',
    'bio'
  )
}

function getDeveloperById (id, db = connection) {
  return db('developers')
    .innerJoin('developersProjects', 'developersProjects.developer_id', 'developers.id')
    .innerJoin('projects', 'developersProjects.project_id', 'projects.id')
    .innerJoin('developersLanguages', 'developersLanguages.developer_id', 'developers.id')
    .innerJoin('languages', 'developersLanguages.language_id', 'languages.id')
    .innerJoin('developersPlatforms', 'developersPlatforms.developer_id', 'developers.id')
    .innerJoin('platforms', 'developersPlatforms.platform_id', 'platforms.id')
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
      'languages.name as languageName',
      'platforms.id as platformId',
      'platforms.name as platformName'
    )
    .where('developers.id', id)
    .then(results => {
      if (!results.length) return null
      const dev = results[0]
      return {
        id: dev.id,
        profilePic: dev.profilePic,
        firstName: dev.firstName,
        lastName: dev.lastName,
        pronoun: dev.pronoun,
        bio: dev.bio,
        email: dev.email,
        projects: results.reduce((acc, project) => {
          return acc.some(e => e.projectId === project.projectId) ? acc : [...acc, {
            projectId: project.projectId,
            projectImage: project.projectImage,
            projectName: project.projectName
          }]
        }, []),
        languages: results.reduce((acc, language) => {
          return acc.some(e => e.languageId === language.languageId) ? acc : [...acc, {
            languageId: language.languageId,
            languageName: language.languageName
          }]
        }, []),
        platforms: results.reduce((acc, platform) => {
          return acc.some(e => e.platformId === platform.platformId) ? acc : [...acc, {
            platformId: platform.platformId,
            platformName: platform.platformName
          }]
        }, [])
      }
    })
}
