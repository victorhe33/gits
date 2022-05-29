# Associations Exercise

![](https://media.vlpt.us/images/leobit/post/09556893-b298-4d29-b8de-ee08d0096e04/sequelize.png)

## Getting Started

- Fork and Clone
- npm install
- npm run test (Ensure that everything was installed correctly)
- `npx sequelize-cli db:create`
- `npx sequelize-cli db:migrate`
- `npx sequelize-cli db:seed:all`

## Overview

We'll be practicing associating the provided models. Foreign Keys have already been set up for you in the migrations. To confirm this open `psql` and connect to `associations_development`. Verify the schema is setup and the tables were created successfully. You'll only be working in the `User` and `Article` models. Utilizing the **[Resources Provided](#Resources)**, associate the provided models and eager load the associated data. You must have `3` passing tests for completion. Run `npm run test` to check your work. Write your queries in the provided `query.js` file.

The associations are as follows:

- User has many Articles as creator (look into [aliases](https://generalassembly.zoom.us/j/96826573003?pwd=MXoxMjJWdi9Cd3QwaytpM0drM05xZz09))
- Article belongs to User as creator (look into [aliases](https://generalassembly.zoom.us/j/96826573003?pwd=MXoxMjJWdi9Cd3QwaytpM0drM05xZz09))

**BONUS**
- User belongs to many Articles as bookmarks through UserBookmark
- Article belongs to many User as bookmarks through UserBookmark

## Lab

You'll need to setup the associations in the respective model in order for the queries to complete correctly. Run `npm run test` to check your work. If everything was done correctly 2 tests should pass. (3rd test is a bonus.)

## Resources

- [Sequelize Associations](https://sequelize.org/master/manual/assocs.html)
- [Sequelize Through](https://sequelize.org/master/manual/advanced-many-to-many.html)
- [Sequelize Eager Loading](https://sequelize.org/master/manual/eager-loading.html)
- [Sequelize Aliases](https://sequelize.org/master/manual/advanced-many-to-many.html#aliases-and-custom-key-names)
