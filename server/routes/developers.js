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
          title: 'Unable to retrieve developers'
        }
      })
    })
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  dev.getDeveloperById(id)
    .then(dev => {
      res.json(dev)
      return null
    })
    .catch((err) => {
      console.log(err.message)
      res.status(500).json({
        error: {
          title: 'Unable to retrieve developer'
        }
      })
    })
})
