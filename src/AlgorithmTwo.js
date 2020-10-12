'use strict'

/**
 *
 * Elabora un algoritmo que solicite un número entero y muestre el nombre del mes correspondiente. Ejemplo: Enero = 1.
 */

const algmTwo = () => {
  return (one) => {
    if (isNaN(one)) throw new TypeError ('Expected integer')
    if (one < 1 || one > 12) throw new Error ('Expected numbers between 1 - 12')
    let month = null
    switch (one) {
      case 1:
        month = `Enero = ${one}`
        break;
      case 2:
        month = `Febrero = ${one}`
        break;
      case 3:
        month = `Marzo = ${one}`
        break;
      case 4:
        month = `Abril = ${one}`
        break;
      case 5:
        month = `Mayo = ${one}`
        break;
      case 6:
        month = `Junio = ${one}`
        break;
      case 7:
        month = `Julio = ${one}`
        break;
      case 8:
        month = `Agosto = ${one}`
        break;
      case 9:
        month = `Septiembre = ${one}`
        break;
      case 10:
        month = `Octubre = ${one}`
        break;
      case 11:
        month = `Noviembre = ${one}`
        break;
      default:
        month = `Diciembre = ${one}`
        break;
    }
    return month
  }
}

module.exports = algmTwo