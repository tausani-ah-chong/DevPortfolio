const express = require('express')

const dev = require('../db/developers')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  dev.getDevelopers()
    .then(devs => {
      res.json(devs)
      return null
    })
    .catch((err) => {
      console.log(err.message)
      res.status(500).json({
        error: {
          title: 'Unable to retrieve event'
        }
      })
    })
})
