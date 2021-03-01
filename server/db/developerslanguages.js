const connection = require('./connection')

module.exports = {
  insertDeveloperLanguage
}

function insertDeveloperLanguage ({ developerId, languageId }, db = connection) {
  return db('developersLanguages')
    .insert({
      developer_id: developerId,
      language_id: languageId
    })
}
