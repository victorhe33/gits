const falso = require('@ngneat/falso')

const users = [...Array(1000)].map((user) => ({
  firstName: falso.randFirstName(),
  lastName: falso.randLastName(),
  email: falso.randEmail(),
  username: falso.randUserName(),
  password: falso.randPassword({ length: 8 }),
  jobTitle: falso.randJobTitle(),
  createdAt: new Date(),
  updatedAt: new Date()
}))
users.forEach((u) => {
  let randomIndex = Math.floor(Math.random() * users.length)
  if (randomIndex % 2 === 0) {
    users[randomIndex].firstName = 'Jane'
  } else {
    users[randomIndex].firstName = 'John'
  }
})

// Will do the same as above. This is simpler for loop version.
// const users = []
// for(let i = 0; i < 100; i++) {
//   users.push({
//     firstName: faker.name.firstName(),
//     lastName: faker.name.lastName(),
//     email: faker.internet.email(),
//     userName: faker.internet.userName(),
//     password: faker.internet.password(8),
//     jobTitle: faker.name.jobTitle(),
//     createdAt: new Date(),
//     updatedAt: new Date()
//   })
// }

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', users, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
}
