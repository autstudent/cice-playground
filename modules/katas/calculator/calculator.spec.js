const { sum } = require('./calculator')

describe('Calculator Tests', () => {
  it('Should return 6 ', () => {
    const given = '3 + 3'
    const actual = sum(given)
    expect(actual).toEqual(6)
  })
})
