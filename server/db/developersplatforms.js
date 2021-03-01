const connection = require('./connection')

module.exports = {
  insertNewDevPlat
}

function insertNewDevPlat ({ developerId, platformId }, db = connection) {
  return db('developersPlatforms')
    .insert({
      developer_id: developerId,
      platform_id: platformId
    })
    .then(devPlatId => devPlatId)
}
