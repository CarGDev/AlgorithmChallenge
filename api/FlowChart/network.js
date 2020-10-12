'use strict'

const express = require('express')
const path = require('path')
const router = express.Router()

const flowOne = (req, res, next) => {
  let file = path.join(__dirname, "Flow-charts/Facebook.jpg");
  res.sendFile(file);
}

const flowTwo = (req, res, next) => {
  let file = path.join(__dirname, "Flow-charts/Coffee.jpg");
  res.sendFile(file);
}

const flowThree = (req, res, next) => {
  let file = path.join(__dirname, "Flow-charts/Rectangulo.jpg");
  res.sendFile(file);
}

router.get('/Facebook', flowOne)
router.get('/Coffee', flowTwo)
router.get('/Rectangulo', flowThree)

module.exports = router
