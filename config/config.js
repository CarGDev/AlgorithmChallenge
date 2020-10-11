'use strict'

require('dotenv').config()

module.exports = function config () {
  const config = {
    port: process.env.PORT
  }
  return config
}