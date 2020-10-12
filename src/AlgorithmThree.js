'use strict'

/**
 *
 * Elaborar un algoritmo que solicite 2 numeros enteros y un operador aritmetico y luego debe de mostrar el resultado de la operacion correspondiente.
 */

const algmThree = (operator) => {
  return (one, two) => {
    if (isNaN(one) || isNaN(two)) throw new TypeError('Expected integer')
    if (one === null || two === null || one === undefined || two === undefined) {
      throw new TypeError('Expected numbers')
    }
    let result
    switch (operator) {
      case '*':
        result = `${one} ${operator} ${two} = ${Math.imul(one, two)}`
        break;
      case '/':
        result = `${one} ${operator} ${two} = ${one / two}`
        break;
      case '+':
        result = `${one} ${operator} ${two} = ${one + two}`
        break;
      case '-':
        result = `${one} ${operator} ${two} = ${one - two}`
        break;
      default:
        throw new TypeError ('Expected operators as: * / - +')
    }

    return result
  }
}

module.exports = algmThree
