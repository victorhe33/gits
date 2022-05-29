# Sequelize Querying Lesson

![](https://www.educative.io/v2api/editorpage/6045894932692992/image/6526134821847040)

## Overview

In this lesson, we'll go over how to query our postgres database utilizing `Sequelize`, we'll learn and practice how to perform everything from simple `crud` operation queries to complex filtering. Sequelize is a great ORM that simplifies the querying process by utilizing methods directly built into our models when we create them. The provided code has all of the configuration, models, migrations and seeds created for you.

## Getting Started

- Fork and Clone
- `npm install`
- `sequelize db:create`
- `sequelize db:migrate`
- `sequelize db:seed:all`

## How Do Queries Work With Sequelize

When we define our `Sequelize` models, you'll notice that the model defined inherites from the `Model` class provided by `Sequelize`. This model class has methods and attributes built in to query or manipulate any model that we create. When we invoke these functions, `Sequelize` executes some `SQL` query to retrieve the desired information from our database. The queries return a promise by default which means we must wait for them to finish by either using `async/await` or `.then().catch()`.

**Note: Not all queries return the result formatted as you'd expect, make sure to check how the result is formatted!**

## Finding Records

### `Model.findAll`

![](<https://sei-r.s3.amazonaws.com/Uploaded+using+RayThis+Extension.png>)

The `findAll` method will query a `table` matching our `model` and return all results. If a filter is provided, or a `where` clause, we can filter results `where` a certain condition is met.

### `Model.findByPk`

![](<https://sei-r.s3.amazonaws.com/Uploaded+using+RayThis+Extension+(2).png>)

The `findByPk` method queries a `table` to find a result where the `primary` key, typically an `id`, is a match.

### `Model.findOne`

![](<https://sei-r.s3.amazonaws.com/Uploaded+using+RayThis+Extension+(4).png>)

The `findOne` method returns **`one`** record at a time, based on a condition. This method is paired with a `where` clause to filter for specific data points.

### `Model.create`

![](<https://sei-r.s3.amazonaws.com/Uploaded+using+RayThis+Extension+(7).png>)

The `create` method will create a new record in the database with the provided information. Unlike `noSql` databases, if information is missing or not specified when invoking the create method, the creation will fail and return an error.

### `Model.destroy`

![](<https://sei-r.s3.amazonaws.com/Uploaded+using+RayThis+Extension+(6).png>)

The `destroy` method will delete a record or records that match the filtering parameters. The filtering parameters or `where` clause is provided to the first object. The second object is provided some extra options to execute on deletion.

### `Model.update`

![](<https://sei-r.s3.amazonaws.com/Uploaded+using+RayThis+Extension+(1).png>)

The `update` method will update a record or records and return an array with the number of items updated and the records updated. It does not return the records by default, we have to provide the `returning:true` flag to the method in order to get the results. The first object is the information to update the record or records with, the second being the `where` clause or filtering to ensure we execute the update on only the desire records.

### Raw Queries

![](<https://sei-r.s3.amazonaws.com/Uploaded+using+RayThis+Extension+(5).png>)

Just because `Sequelize` provides us with `methods` to execute queries does not mean they are perfect. `ORM`'s are notorious for performing more operations than necessary when querying. If you feel that you can execute a complex query and `Sequelize` is taking too long, you can write your own!

## We Do

In the provided `queries.js` file, you'll create functions to execute several queries, utilize the `stringify` method provided to print the results to the console.

Write functions to execute the following queries on the `Business` model:

- Find all businesses
- Find a business by id
- Find a business where the rating is a 5
- Find one business where the rating is a 4
- Create a business
- Update the business you previously created
- Delete the business you created

Once you complete your function, make sure to add it to the `try` block in the `main` function at the bottom of the file.

## Recap

`Sequelize` is a great `ORM` that gives us a lot out of the box. `ORMS` are great tools to speed up our workflow and add in some extra security benefits. There are many more methods that you can use with `Sequelize` which we'll list below in the [Resources Section](#Resources). As with any new tool, there is a learning curve, but once you pick up the basics the rest just follows the same pattern.

## Resources

- [Sequelize](https://sequelize.org/master/index.html)
- [Sequelize Queries](https://sequelize.org/master/manual/model-querying-basics.html)
- [Raw Queries](https://sequelize.org/master/manual/raw-queries.html)
