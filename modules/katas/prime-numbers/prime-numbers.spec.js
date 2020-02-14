import { PrimeNumbers } from './prime-numbers'

describe('Prime Number', () => {
  it('should return prime numbers below 10', () => {
    const given = 10
    const primenumbers = new PrimeNumbers()

    const actual = primenumbers.calculate(given)

    expect(actual).toEqual([2, 5])
  })
  it('should return prime numbers below 55', () => {
    const given = 55
    const primenumbers = new PrimeNumbers()

    const actual = primenumbers.calculate(given)

    expect(actual).toEqual([5, 11])
  })
  it('should return prime numbers below 60', () => {
    const given = 60
    const primenumbers = new PrimeNumbers()

    const actual = primenumbers.calculate(given)

    expect(actual).toEqual([2, 2, 3, 5])
  })
  it('should return false using primer number 19 ', () => {
    const given = 19
    const primenumbers = new PrimeNumbers()

    const actual = primenumbers.calculate(given)

    expect(actual).toEqual([19])
  })
})
