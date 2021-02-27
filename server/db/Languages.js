const connection = require('./connection')

module.exports = {
  getLanguages
}

function getLanguages (db = connection) {
   return db('languages')
}