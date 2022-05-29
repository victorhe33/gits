const functions = require('../index')
const nums = [...Array(15)].map((_, i) => i + 1)

console.error = jest.fn()
describe('Higher Order Functions', () => {
  it('getSquares should return an array of all numbers multiplied by 2', () => {
    expect(functions.getSquares(nums)).toEqual(nums.map((n) => n * 2))
  })
  it('isDivBy3 should return an array booleans if the number is divisible by 3', () => {
    expect(functions.isDivBy3(nums)).toEqual(
      nums.map((n) => (n % 3 === 0 ? true : false))
    )
  })
  it('filterOdds should return an array of only odd numbers', () => {
    expect(functions.filterOdds(nums)).toEqual(nums.filter((n) => n % 2 !== 0))
  })
  it('filterEvens should return an array of only even numbers', () => {
    expect(functions.filterEvens(nums)).toEqual(nums.filter((n) => n % 2 === 0))
  })
  it('filterDivBy4 should return an array of numbers that are divisible by 4', () => {
    expect(functions.filterDivBy4(nums)).toEqual(
      nums.filter((n) => n % 4 === 0)
    )
  })
  it('addAllUp should return the total sum of all numbers in the array', () => {
    expect(functions.addAllUp(nums)).toEqual(
      nums.reduce((ac, n) => (ac += n), 0)
    )
  })
  it('multiplyAllNums should return the total product of all numbers in the array', () => {
    expect(functions.multiplyAllNums(nums)).toEqual(
      nums.reduce((ac, n) => (ac *= n), 1)
    )
  })
})

describe('Bonuses', () => {
  it('sumSquareAllNums should return the total sum of all numbers to the second power', () => {
    expect(functions.sumSquareAllNums(nums)).toEqual(
      nums.reduce((ac, n) => (ac += Math.pow(n, 2)), 0)
    )
  })
  it('addAllAges should return the total sum of all ages in the provided array', () => {
    let persons = [
      { name: 'Carl', age: 30 },
      { name: 'Cara', age: 10 },
      { name: 'Carmen', age: 15 }
    ]
    expect(functions.addAllAges(persons)).toEqual(
      persons.reduce((ac, person) => (ac += person.age), 0)
    )
  })
})
