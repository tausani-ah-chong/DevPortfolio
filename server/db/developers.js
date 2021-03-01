const connection = require('./connection')

module.exports = {
  getDevelopers,
  getDeveloperById
}

function getDevelopers (db = connection) {
  return db('developers')
    .leftJoin('developersProjects', 'developersProjects.developer_id', 'developers.id')
    .leftJoin('projects', 'developersProjects.project_id', 'projects.id')
    .leftJoin('developersLanguages', 'developersLanguages.developer_id', 'developers.id')
    .leftJoin('languages', 'developersLanguages.language_id', 'languages.id')
    .leftJoin('developersPlatforms', 'developersPlatforms.developer_id', 'developers.id')
    .leftJoin('platforms', 'developersPlatforms.platform_id', 'platforms.id')
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
      'developersProjects.developer_id as projectDevId',
      'developersLanguages.developer_id as languageDevId',
      'developersPlatforms.developer_id as platformDevId',
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
          profilePicture: dev.profilePic,
          firstName: dev.firstName,
          lastName: dev.lastName,
          pronoun: dev.pronoun,
          bio: dev.bio,
          projects: results.reduce((projacc, project) => {
            return project.projectDevId === dev.id && !projacc.some(e => e.projectId === project.projectId)
              ? [...projacc, {
                projectId: project.projectId,
                projectImage: project.projectImage,
                projectName: project.projectName
              }]
              : projacc
          }, []),
          languages: results.reduce((langacc, language) => {
            return language.languageDevId === dev.id && !langacc.some(e => e.languageId === language.languageId)
              ? [...langacc, {
                languageId: language.languageId,
                languageName: language.languageName
              }]
              : langacc
          }, []),
          platforms: results.reduce((platacc, platform) => {
            return platform.platformDevId === dev.id && !platacc.some(e => e.platformId === platform.platformId)
              ? [...platacc, {
                platformId: platform.platformId,
                platformName: platform.platformName
              }]
              : platacc
          }, [])
        }]
      }, [])
      return devs
    })
}

function getDeveloperById (id, db = connection) {
  return db('developers')
    .leftJoin('developersProjects', 'developersProjects.developer_id', 'developers.id')
    .leftJoin('projects', 'developersProjects.project_id', 'projects.id')
    .leftJoin('developersLanguages', 'developersLanguages.developer_id', 'developers.id')
    .leftJoin('languages', 'developersLanguages.language_id', 'languages.id')
    .leftJoin('developersPlatforms', 'developersPlatforms.developer_id', 'developers.id')
    .leftJoin('platforms', 'developersPlatforms.platform_id', 'platforms.id')
    .where('developers.id', id)
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
      'developersProjects.developer_id as projectDevId',
      'developersLanguages.developer_id as languageDevId',
      'developersPlatforms.developer_id as platformDevId',
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
          profilePicture: dev.profilePic,
          firstName: dev.firstName,
          lastName: dev.lastName,
          pronoun: dev.pronoun,
          bio: dev.bio,
          projects: results.reduce((projacc, project) => {
            return project.projectDevId === dev.id && !projacc.some(e => e.projectId === project.projectId)
              ? [...projacc, {
                projectId: project.projectId,
                projectImage: project.projectImage,
                projectName: project.projectName
              }]
              : projacc
          }, []),
          languages: results.reduce((langacc, language) => {
            return language.languageDevId === dev.id && !langacc.some(e => e.languageId === language.languageId)
              ? [...langacc, {
                languageId: language.languageId,
                languageName: language.languageName
              }]
              : langacc
          }, []),
          platforms: results.reduce((platacc, platform) => {
            return platform.platformDevId === dev.id && !platacc.some(e => e.platformId === platform.platformId)
              ? [...platacc, {
                platformId: platform.platformId,
                platformName: platform.platformName
              }]
              : platacc
          }, [])
        }]
      }, [])
      console.log(devs)
      return devs
    })
}
