'use strict'

const express = require('express')

const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

const algtmOne = (req, res, next) => {
  controller.algtmOne(req.body.numberOne, req.body.numberTwo)
  .then(() => {
    response.success(req, res, token, 200)
  })
  .catch(next)
}

const algtmTwo = (req, res, next) => {
  controller.algtmTwo(req.body.number)
  .then(() => {
    response.success(req, res, token, 200)
  })
  .catch(next)
}

const algtmThree = (req, res, next) => {
  controller.algtmThree(req.body.numberOne, req.body.numberTwo, req.body.operator)
  .then(() => {
    response.success(req, res, token, 200)
  })
  .catch(next)
}

const algtmFour = (req, res, next) => {
  controller.algtmFour(req.body.numberOne, req.body.numberTwo, req.body.numberThree)
  .then(() => {
    response.success(req, res, token, 200)
  })
  .catch(next)
}

const algtmFive = (req, res, next) => {
  controller.algtmFive(req.body.numberOne, req.body.numberTwo, req.body.numberThree)
  .then(() => {
    response.success(req, res, token, 200)
  })
  .catch(next)
}

const algtmSix = (req, res, next) => {
  controller.algtmSix(req.body.numberOne, req.body.numberTwo, req.body.personOne, req.body.personTwo)
  .then(() => {
    response.success(req, res, token, 200)
  })
  .catch(next)
}

router.get('/One', algtmOne)
router.get('/Two', algtmTwo)
router.get('/Three', algtmThree)
router.get('/Four', algtmFour)
router.get('/Five', algtmFive)
router.get('/Six', algtmSix)

module.exports = router
