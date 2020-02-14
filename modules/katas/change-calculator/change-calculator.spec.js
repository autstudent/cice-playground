import { ChangeCalculator } from './change-calculator'

describe('Change Calculator', () => {
  it('should return some bills', () => {
    const given = 50
    const change = new ChangeCalculator()

    const actual = change.calculate(given)

    expect(actual).toEqual([20, 20, 10])
  })
})
