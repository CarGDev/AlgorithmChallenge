'use strict'

/**
 *
 * Elaborar un algoritmo que necesita obtener el promedio de un estudiante a partir de sus tres notas parciales
 */

const algmFive = (one) => {
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
    arr.map(x => result += x)
    return result /= arr.length
  }
}

module.exports = algmFive
