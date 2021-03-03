const connection = require('./connection')

module.exports = {
  insertDeveloperLanguage
}

function insertDeveloperLanguage (developerId, languageIds, db = connection) {
  const devLangId = languageIds.map(element => {
    return {
      developer_id: developerId,
      language_id: Number(element.languageId)
    }
  })
  return db('developersLanguages')
    .insert(devLangId)
}
