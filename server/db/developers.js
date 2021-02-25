const connection = require('./connection')

module.exports = {
  getDevelopers
}

function getDevelopers (db = connection) {
  return db('developers').select()
}
