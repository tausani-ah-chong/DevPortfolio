const connection = require('./connection')

module.exports = {
  insertNewDevPlat
}

function insertNewDevPlat (developerId, platformIds, db = connection) {
  const devPlatId = platformIds.map(element => {
    return {
      developer_id: developerId,
      platform_id: Number(element.platformId)
    }
  })
  return db('developersPlatforms')
    .insert(devPlatId)
}
