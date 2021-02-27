const connection = require('./connection')

module.exports = {
  getDevelopers
}

function getDevelopers (db = connection) {
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
      'pronoun',
      'bio',
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
    .then(results => {
      const devs = results.reduce((devAcc, dev) => {
        return devAcc.some(e => e.id === dev.id) ? devAcc : [...devAcc, {
          id: dev.id,
          profilePic: dev.profilePic,
          firstName: dev.firstName,
          lastName: dev.lastName,
          pronoun: dev.pronoun,
          bio: dev.bio,
          projects: results.reduce((projacc, project) => {
            return projacc.some(e => e.projectId === project.projectId) ? projacc : [...projacc, {
              projectId: project.projectId,
              projectImage: project.projectImage,
              projectName: project.projectName
            }]
          }, []),
          languages: results.reduce((langacc, language) => {
            return langacc.some(e => e.languageId === language.languageId) ? langacc : [...langacc, {
              languageId: language.languageId,
              languageName: language.languageName
            }]
          }, [])
          // platforms: results.reduce((platacc, platform) => {
          //   return platacc.some(e => e.platformId === platform.platformId) ? platacc : [...platacc, {
          //     platformId: platform.platformId,
          //     platformName: platform.platformName
          //   }]
          // }, [])
        }]
      }, [])
      console.log(JSON.stringify(devs, null, 2))
      return devs
    })
}
