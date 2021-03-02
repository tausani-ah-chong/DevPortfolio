const express = require('express')

const devPlat = require('../db/developersplatforms')

const router = express.Router()

module.exports = router

router.post('/:uid', (req, res) => {
  const devId = Number(req.params.id)
  const platIds = req.body
  return devPlat.insertNewDevPlat(devId, platIds)
    .then(devPlatId => {
      res.status(201).json(devPlatId)
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
