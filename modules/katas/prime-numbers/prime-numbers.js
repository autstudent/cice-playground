const isPrime = require('prime-number')

export class PrimeNumbers {
  /**
   *
   * @param {number} string
   * @returns {number[]}
   */

  calculate(number) {
    if (isPrime(number)) return [number]

    let primenumbers = []

    for (let i = number - 1; i !== 0; i--) {
      const calculatednumber = number / i

      if (Number.isInteger(calculatednumber)) {
        if (isPrime(calculatednumber)) {
          number = number - i
          primenumbers.push(calculatednumber)
        }
      }
    }

    return primenumbers
  }
}
