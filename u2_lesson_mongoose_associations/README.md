# MongoDB Associations and Relationships

![](https://camo.githubusercontent.com/d03d44a0d98cdeb321d57532166b44b34c61a3bc3aa0af33e9b9bae382f9bf5d/68747470733a2f2f7777772e66696c657069636b65722e696f2f6170692f66696c652f4b44515a56383847544961516e36703047616745)

## Overview

In this lesson we'll learn how to properly associate and establish relationships between the data stored in a database. By associating data, we can eliminate the need for duplicate data entries and a more organized data structure when retrieving the data.

## Getting started

- fork and clone

## What Are Associations/Relationships

In order to understand how and why we set up relationships, read the following article: [Modeling Relationships in MongoDB](https://betterprogramming.pub/modeling-relationships-in-mongodb-b69b93181c48)

As you can see, there are many different ways of associating data with MongoDB. There are trade offs to every type of association. What's important to understand, is how to set up the associations.

You'll typically see the following:

- One-To-Many
- Many-To-Many

## MongoDB: One-to-Many Relationships

> Take five minutes and read the MongoDB docs on relationships:

- **[MongoDB One-To-Many Embedded](https://docs.mongodb.com/manual/tutorial/model-embedded-one-to-many-relationships-between-documents)**
- **[One To Many Referenced](https://docs.mongodb.com/manual/tutorial/model-referenced-one-to-many-relationships-between-documents)**

> Once again, what are the trade-offs between **embedding** a document vs **referencing** a document?

What's a one-to-many relationship? A common example is a blog app. A blog has users, a user can have many blog posts. One-to-many relationships are quite common and we need to know how to implement them on the database level.

In MongoDB we can create a one-to-many relationship by either:

1. embedding the related documents
2. referencing the related document(s)

There are trade-offs to each. We should understand them and pick what suits our use case best.

Let's consider a few examples!

### Embedding Documents

**[MongoDB One-To-Many Embedded](https://docs.mongodb.com/manual/tutorial/model-embedded-one-to-many-relationships-between-documents)**

#### Example 1

Consider the following `user` document with many `posts`'s embedded in it:

```js
{
   _id: ObjectId("3e399709171f6188450e43d2"),
   name: "Joe Schmoe",
   handle:"joeBeans123",
   posts: [
      {
        title: "123 Fake Street",
        description: "Faketon",
        likes: 16,
      },
      {
        title: "1 Some Other Street",
        description: "Boston",
        likes: 32,
      }
   ]
}
```

As you can see, we can embed content into an existing `document`. This is pretty common in MongoDB.

- **Cons**
  - As the user creates more posts, the array grows. This can lead to increased query latency due to scanning the documents within a collection.
  - A user might accidently create a duplicate entry leaving your front end with duplicate posts.
  - Deleting specific records may become challenging due to how mongoDB scans collections.
- **Pros**
  - simpler queries to find data
  - the data is returned with the desired record right off the bat

#### Example 2

Here's another way we can embed documents:

```js
{
   _id: ObjectId("2e399709171f6188450e43d2")
   title: "Learn JavaScript",
   description: "Take a coding bootcamp on JavaScript",
   status: "active",
   user: {
              first_name: "Joe",
              last_name: "Schmoe",
              email: "j.schmoe@gmail.com",
              job_title: "Junior Developer"
         }
}

{
   _id: ObjectId("8e399709171f6588450e43g2")
   title: "Learn React",
   description: "Take a coding bootcamp on React",
   status: "active",
   user: {
              first_name: "Joe",
              last_name: "Schmoe",
              email: "j.schmoe@gmail.com",
              job_title: "Junior Developer"
         }
}
```

Notice a pattern here. Both of the users are the same. The biggest issue with embedding documents in this way, is that you'll end up creating duplicate records (in this case a user).

### Referencing Documents

**[One To Many Referenced](https://docs.mongodb.com/manual/tutorial/model-referenced-one-to-many-relationships-between-documents)**

#### Example 1

Let's see how we would model the same data by having posts **reference** a user document:

`users collection`

```js
{
   _id: ObjectId("3e399709171f6188450e43d2"),
   name: "Joe Schmoe"
}
```

`posts collection`

```js
{
   _id: ObjectId("9e391709171f6188450e43f4"),
   user_id: ObjectId("3e399709171f6188450e43d2"),
   title: "123 Fake Street",
   description: "Faketon",
   likes: 16
}

{
   _id: ObjectId("8s32170987gf6188450y43f2"),
   user_id: ObjectId("3e399709171f6188450e43d2"),
   title: "1 Some Other Street",
   description: "Boston",
   likes: 32
}
```

Utilizing this design, we have much more control over the records in our database. By using `references`, we create a virtual link between collections to describe what record belongs to who. The `reference` is typically the `_id` of a document due to it being unique and unmodifiable!

- **Cons**
  - queries to load the associated data are much more complex
  - managing multiple schemas/collections becomes trickier as you add more references
- **Pros**
  - reduces the risk of duplicates due to schema restrictions that we can add
  - managing the data becomes easier (Deleting and Updating)
  - the data is organized in a way that latency does not increase (mongoDB performs some magic to make references super fast)

#### Example 2

We can also use `references` within the parent document. We store the records within an array of the child documents `ObjectId`.

```js
{
  _id: ObjectId("4e339749175f6147450e43d1")
  first_name: "Joe",
  last_name: "Schmoe",
  email: "j.schmoe@gmail.com",
  job_title: "Junior Developer",
  tasks: [ ObjectId("2e399709171f6188450e43d2"), ObjectId("8e399709171f6588450e43g2") ]
}
```

`task`s documents

```js
{
   _id: ObjectId("2e399709171f6188450e43d2")
   title: "Learn JavaScript",
   description: "Take a coding bootcamp on JavaScript",
   status: "active"
}

{
   _id: ObjectId("8e399709171f6588450e43g2")
   title: "Learn React",
   description: "Take a coding bootcamp on React",
   status: "active"
}
```

This is a common way to model one-to-many relationships where we know we plan on creating requests for a user and all their associated tasks. Instead of embedding tasks within the user document, we embed the task id. This is more efficient. Our user document stays small. Its efficient to request all users or a specific user. This model supports a data model where a user can have many tasks because all we're storing is the task id inside the user document - so it doesn't take up much space in the user document. And if we do want the task data we can request it from the tasks collection based on the task id found in the user document.

## Exercise

Let's implement document references. We have the concept tasks and users. Tasks belong to users via **referencing**. How would we create that via code?! Let's start:

```sh
npm init -y
npm install mongoose
npm install --save-dev chance
mkdir db models seed
touch db/index.js models/{user,task,index}.js seed/tasksUsers.js query.js
```

Create a `.gitignore` file

```sh
echo "
/node_modules
.DS_Store" >> .gitignore
```

Now let's open up Visual Studio Code and write some code:

```sh
code .
```

Inside our `db` folder we are going to use Mongoose to establish a connection to our MongoDB `tasksDatabase`:

`db/index.js`

```js
const mongoose = require('mongoose')

mongoose
  .connect('mongodb://127.0.0.1:27017/tasksDatabase')
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })
// mongoose.set('debug', true)
const db = mongoose.connection

module.exports = db
```


> Notice `mongoose.set('debug', true)` is commented out. This line of code is super handy if you ever need to debug any mongoDB queries. Feel free to uncomment it and use it.

Let's create our task schema:

`models/task.js`

```js
const { Schema } = require('mongoose')

const Task = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Task
```

Now we can create our user schema:

`models/user.js`

```js
const { Schema } = require('mongoose')

const User = new Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    job_title: { type: String, required: true },
    tasks: [{ type: Schema.Types.ObjectId, ref: 'tasks' }]
  },
  { timestamps: true }
)

module.exports = User
```

We'll now set up our models:

`models/index.js`

```js
const { model } = require('mongoose')
const TaskSchema = require('./task')
const UserSchema = require('./user')

const User = model('users', UserSchema)
const Task = model('tasks', TaskSchema)

module.exports = {
  User,
  Task
}
```

Notice how we create a tasks array that holds a **reference** to the tasks schema. Our user model now has a relationship to our task model. Our user model can hold an arrays of task ids.

Ok. Let's populate our database with data so we can query against it and make sure we setup our models correctly.

### Seed your database

Let's now create a seed file to create some data for our database:

`seed/tasksUsers.js`

```js
const db = require('../db')
const Chance = require('chance')
const { Task, User } = require('../models')

const chance = new Chance()

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const createTasks = async () => {
    const tasks = [...Array(400)].map((task) => {
        return new Task({
            title: chance.sentence(),
            description: chance.paragraph()
        })
    })
    await Task.insertMany(tasks)
    console.log('Created Tasks!')
    return tasks
}

const createUsersWithTasks = async (tasks) => {
    console.log(tasks)
    let lenOfItems = 100
    const users = [...Array(lenOfItems)].map((user) => {
        const selectedTasks = tasks.splice(0, tasks.length / lenOfItems)
        return {
            first_name: chance.first(),
            last_name: chance.last(),
            email: chance.email(),
            job_title: chance.profession(),
            tasks: selectedTasks.map((task) => task._id)
        }
    })
    await User.insertMany(users)
    console.log('Created Users!')
}

const run = async () => {
    const tasks = await createTasks()
    await createUsersWithTasks(tasks)
    db.close()
}

run()
```

##

Once you've written a script to seed data test it out:

```sh
node seed/tasksUsers.js
```

You should now be able to open up [MongoDB Compass](https://www.mongodb.com/products/compass) and see your database with all the seed data and proper relationship between users and tasks.

You can also test that your data and relationships are good by writing a simple query file:

`query.js`

```js
const db = require('./db')
const { User, Task } = require('./models')

const findAllUsers = async () => {
  const users = await User.find()
  console.log('All users:', users)
}

const findAllTasks = async () => {
  const tasks = await Task.find()
  console.log('All tasks:', tasks)
}

const findOneWithTasks = async () => {
  const user1 = await User.findOne()
  // Try to use the populate method here to load all of the tasks for a user
  // https://mongoosejs.com/docs/populate.html
  console.log(JSON.stringify(user1), null, 2)
}

const run = async () => {
  try {
    //   await findAllUsers()
    // await findAllTasks()
    // await findOneWithTasks()
  } catch (error) {
    console.log(error)
  } finally {
    await db.close()
  }
}

run()
```

## Recap

In this lesson, we covered a few different ways of associating data with mMongoDB. This knowledge will slowly settle in, the more your work with MongoDB. For now, just be aware that there are two ways to create relationships: **embedding** and **referencing**. And there are tradeoffs to both. Feel free to come back to this lesson, study it, review it, and work with it. This knowledge takes a while to solidify.

## Resources

- [MongoDB Associations](https://docs.mongodb.com/mongoid/current/tutorials/mongoid-relations/)
- [Mongoose Populate](https://medium.com/@nicknauert/mongooses-model-populate-b844ae6d1ee7)
