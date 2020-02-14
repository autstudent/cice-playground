export class ChangeCalculator {
  /**
   *
   * @param {money} number
   * @returns {number[]}
   */

  constructor() {
    this.bills = [50, 20, 10, 5]
    this.coins = [2, 1, 0.5, 0.25, 0.1, 0.05]
  }

  calculate(money) {
    let change = []

    console.log(this.bills, this.coins)

    for (let i = money - 1; i !== 0; i--) {
      let restmoney = money
      this.bills.map(bill => {
        if (bill < i) {
          console.log('impirmi', i)
          restmoney = restmoney - bill
          console.log('impiasdasdsrmi', restmoney)
        }
      })
    }

    return [20, 20, 10]
  }
}
