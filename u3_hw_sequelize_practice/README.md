# Sequelize Practice

![](https://www.habilelabs.io/wp-content/uploads/2020/11/Solving-Pagination-and-Filter-Issue-in-Sequelize-Using-QueryGenerator-1.jpg)


## Deliverables

You'll be creating a database with a theme of your choosing. You must have the following:

- At least 3 models
- Table names must be lowercased and snake_cased
- CRUD queries for each model
  - **C** reate
  - **R** ead
  - **U** pdate
  - **D** elete

You can hard code in information for the create, update, and delete. You can either create 3 separate files or one file for all of these queries.

## Getting Started

These commands should be done in order. Remember, if you are a Windows user, these commands will be different obviously.

```sh
npm init -y
```

```sh
npm install sequelize pg
```

```sh
sequelize init
```

Modify your `config.json` so that you're creating a database with your chosen name and modify the dialect to `postgres`.

Create your database:

```sh
sequelize db:create
```

---

## Creating Models

To create a new model, run:

```sh
sequelize model:generate --name <Your Model Name Goes Here> --attributes <someattribute>:<somedatatype>,<other stuff...>
```

Remember, there can be no spaces in between each attribute.

Once your model is created, don't forget to add the `tableName` field in the model and adjust the migration generated accordingly.

After each model creation, run:

```sh
sequelize db:migrate
```

## Generating Seeds

You can generate a seed file using:

```sh
sequelize seed:generate --name <Seed Name>
```

Run your seed using:

```sh
sequelize db:seed:all
```

Hint: You can also use _falso_:

```sh
npm i @ngneat/falso
```

## Requiring Models

Don't forget to require your models in the file you're using for your queries:

```js
const {} = require('./models')
```

#### Made A Mistake?

You can always revert a migration using:

```sh
sequelize db:migrate:undo
```

## Submission

Submit your pull request utilizing the **[PR Guidelines](https://github.com/SEI-R-2-22/template_pull_request)**.
