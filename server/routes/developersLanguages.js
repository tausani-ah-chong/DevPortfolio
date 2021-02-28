const express = require('express')

const devLang = require('../db/developerslanguages')

const router = express.Router()

module.exports = router

router.post('/:id', (req, res) => {
  const devId = Number(req.params.id)
  const langId = Number(req.body.languageId)
  return devLang.insertDeveloperLanguage({ developerId: devId, languageId: langId })
    .then(devLangId => {
      res.status(201).json(devLangId)
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
