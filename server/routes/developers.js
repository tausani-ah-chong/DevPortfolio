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

router.get('/:uid', (req, res) => {
  const { uid } = req.params
  dev.getDeveloperById(uid)
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
  const { uid } = req.params
  const userWithUid = { ...newUser, uuid: uid }
  console.log('new user with id:', JSON.stringify(req))
  dev.insertNewDeveloper(userWithUid)
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
