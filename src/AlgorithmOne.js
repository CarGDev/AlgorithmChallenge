'use strict'

/**
 *
 * Elabora un algoritmo que solicite 2 numeros y muestre el promedio de ambos.
 */

const algmOne = (one) => {
  return (two) => {
    if (isNaN(one) || isNaN(two)) throw new TypeError('Expected integer')
    return (one + two) / 2
  }
}

module.exports = algmOne
