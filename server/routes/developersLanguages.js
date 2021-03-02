const express = require('express')

const devLang = require('../db/developerslanguages')

const router = express.Router()

module.exports = router

// router.post('/:uid', (req, res) => {
//   const devId = Number(req.params.id)
//   const langIds = req.body
//   return devLang.insertDeveloperLanguage(devId, langIds)
//     .then(devLangIds => {
//       res.status(201).json(devLangIds)
//       return null
//     })
//     .catch((err) => {
//       console.log(err.message)
//       res.status(500).json({
//         error: {
//           title: 'create new developer'
//         }
//       })
//     })
// })

router.post('/:id', (req, res) => {
  const devId = Number(req.params.id)
  const langIds = req.body
  return devLang.insertDeveloperLanguage(devId, langIds)
    .then(devLangIds => {
      res.status(201).json(devLangIds)
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
