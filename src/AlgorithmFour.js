'use strict'

/**
 *
 * Elaborar un algoritmo para leer 3 números enteros diferentes entre sí y determinar el número mayor de los tres.
 */

const algmFour = (one) => {
  return (two, three) => {
    if (isNaN(one) || isNaN(two) || isNaN(three)) throw new TypeError('Expected integer')
    if (one === null ||
        two === null ||
        three === null ||
        one === undefined ||
        two === undefined ||
        three === undefined) {
      throw new TypeError('Expected numbers')
    }
    const arr = [one, two, three]
    let result = 0
    arr.map(x => { if (x > result) result = x })
    return result
  }
}

module.exports = algmFour
