'use strict'

/**
 *
 * Elaborar un algoritmo que solicite la edad de dos personas y muestre en pantalla la edad del mayor.
 */

const algmSix = (peopleOne, peopleTwo) => {
  return (one, two) => {
    if (isNaN(one) || isNaN(two)) throw new TypeError('Expected integer')
    if (!isNaN(peopleOne) || !isNaN(peopleTwo)) throw new TypeError('Expected string')
    if (one === null ||
        two === null ||
        peopleOne === null ||
        peopleTwo === null ||
        one === undefined ||
        two === undefined ||
        peopleOne === undefined ||
        peopleTwo === undefined) {
      throw new TypeError('Expected numbers and persons')
    }
    const arr = [one, two]
    const arrPeople = [peopleOne, peopleTwo]
    let people = 0
    let result = 0
    arr.map((x, i) => {
      if (x > result) {
        result = x
        people = `${arrPeople[i]} es mayor porque tiene ${x} años`
      }
    })
    return people
  }
}

module.exports = algmSix
