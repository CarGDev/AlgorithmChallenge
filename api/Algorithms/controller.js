'use strict'
const algmOne = require('../../src/AlgorithmOne')
const algmTwo = require('../../src/AlgorithmTwo')
const algmThree= require('../../src/AlgorithmThree')
const algmfour = require('../../src/AlgorithmFour')
const algmFive = require('../../src/AlgorithmFive')
const algmSix = require('../../src/AlgorithmSix')

const algtmOne = async (one, two) => {
  const result = await algmOne(one)(two)
  return {
    result: result
  }
}

const algtmTwo = async (one) => {
  const result = await algmTwo()(one)
  return {
    result: result
  }
}

const algtmThree = async (one, two, operator) => {
  const result = await algmThree(operator)(one, two)
  return {
    result: result
  }
}

const algtmFour = async (one, two, three) => {
  const result = await algmfour(one)(two, three)
  return {
    result: result
  }
}

const algtmFive = async (one, two, three) => {
  const result = await algmFive(one)(two, three)
  return {
    result: result
  }
}

const algtmSix = async (one, two, peopleOne, peopleTwo) => {
  const result = await algmSix(peopleOne, peopleTwo)(one, two)
  return {
    result: result
  }
}

module.exports = {
  algtmOne,
  algtmTwo,
  algtmThree,
  algtmFour,
  algtmFive,
  algtmSix
}