const queries = require('../queries')
const { sequelize } = require('../models')
describe('Should Log All Queries', () => {
  it('should log all businesses', async () => {
    const businesses = await queries.findAllBusinesses()
    console.log(businesses)
    expect(businesses).toEqual(true)
    return businesses
  })

  it('should log all locations', async () => {
    const locations = await queries.findAllLocations()
    expect(locations).toEqual(true)
    return locations
  })

  it('should log all business phones', async () => {
    const phones = await queries.findAllBusinessPhones()
    expect(phones).toEqual(true)
    return phones
  })

  it('should log all business names', async () => {
    const names = await queries.getAllNames()
    expect(names).toEqual(true)
    return names
  })

  it('***BONUS***: should log all business ratings', async () => {
    const ratings = await queries.getAllBRatings()
    expect(ratings).toEqual(true)
    return ratings
  })
})

afterAll(() => {
  sequelize.close()
})
