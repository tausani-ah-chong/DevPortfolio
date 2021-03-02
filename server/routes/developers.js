const express = require('express')

const dev = require('../db/developers')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  dev.getDevelopers()
    .then(devs => res.json(devs))
    .catch((err) => {
      console.log(err.message)
      res.status(500).json({
        error: {
          title: 'Unable to retrieve developers'
        }
      })
    })
})

// Might take ID
router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  dev.getDeveloperById(id)
    .then(devs => res.json(devs))
    .catch((err) => {
      console.log(err.message)
      res.status(500).json({
        error: {
          title: 'Unable to retrieve developers'
        }
      })
    })
})

router.post('/get-started/:uid', (req, res) => {
  const newUser = req.body
  dev.insertNewDeveloper(newUser)
    .then(devId => {
      res.status(201).json(devId)
      return null
    })
    .catch((err) => {
      console.log(err.message)
      res.status(500).json({
        error: {
          title: 'create new developer'
        }
      })
    })
})
