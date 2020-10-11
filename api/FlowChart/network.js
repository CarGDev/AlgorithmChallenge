'use strict'

const express = require('express')

const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

const flowOne = (req, res, next) => {
  controller.flowOne()
  .then(() => {
    response.success(req, res, token, 200)
  })
  .catch(next)
}

const flowOneTwo = (req, res, next) => {
  controller.flowOneTwo()
  .then(() => {
    response.success(req, res, token, 200)
  })
  .catch(next)
}

const flowOneThree = (req, res, next) => {
  controller.flowOneThree()
  .then(() => {
    response.success(req, res, token, 200)
  })
  .catch(next)
}

router.get('/Facebook', flowOne)
router.get('/Coffee', flowOneTwo)
router.get('/Rectangulo', flowOneThree)

module.exports = router
