const { Business, Employee, Address, sequelize } = require('../models')
const queries = require('../queries')
describe('Name of the group', () => {
  it('getAllBusinesses should get all businesses', async () => {
    const b = await Business.findAll()
    let res = await queries.getAllBusinesses()
    expect(res).toEqual(b)
  })
  it('getBusinessAddress should return all businesses and associated address', async () => {
    const b = await Business.findAll({ include: [Address] })
    let res = await queries.getBusinessAddress()
    expect(res).toEqual(b)
  })
  it('getBusinessEmployees should return all businesses and associated employees', async () => {
    const b = await Business.findAll({ include: [Employee] })
    let res = await queries.getBusinessEmployees()
    expect(res).toEqual(b)
  })
  it('getBusinessEmployees should return all businesses and associated employees', async () => {
    const b = await Business.findAll({ include: [Employee] })
    let res = await queries.getBusinessEmployees()
    expect(res).toEqual(b)
  })
  it('getBusinessAddressAndEmployee should return all businesses with the associated address and employees', async () => {
    const b = await Business.findAll({ include: [Address, Employee] })
    let res = await queries.getBusinessAddressAndEmployee()
    expect(res).toEqual(b)
  })
})

afterAll(() => {
  sequelize.close()
})
