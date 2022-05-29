# Sequelize Querying

![](https://hackernoon.com/hn-images/0*ShbzlvZjT-VI72oW.png)

## Getting started

- Fork and Clone
- `npm install`
- `sequelize db:create`
- `sequelize db:migrate`
- `sequelize db:seed:all`

# Instructions

Once you've completed the above steps, connect to your database and make sure the entries were created:

```sh
psql sequelize_querying_lab_development
```

```SQL
SELECT * FROM users;
```

In this lab, you'll practice writing queries on the provided `User` model. All of your queries will be written in the provided `query.js` file.
You'll be utilizing the prior **[Lesson](https://github.com/SEI-R-2-22/u3_lesson_sequelize_queries)** or the [Sequelize Docs](https://sequelize.org/master/manual/querying.html) to complete this lab. Run your file to test using `node query.js`. A method called `stringify` has been provided for you to check your work.

The `query.js` file has all of the necessary instructions in order to complete this lab.

## Resources

- [Sequelize Querying](https://sequelize.org/master/manual/querying.html)
- [Sequelize Cheatsheet](https://github.com/SEI-R-4-26/u3_cheatsheet_sequelize)
