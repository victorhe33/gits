const queries = require('./queries')

async function run() {
  await queries.findAllBusinesses()
  await queries.findAllLocations()
  await queries.findAllBusinessPhones()
  await queries.getAllNames()
  await queries.getAllBRatings()
  process.exit()
}

run()
