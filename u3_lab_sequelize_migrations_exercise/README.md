# Sequelize Migrations Exercise

![](https://lowres.cartooncollections.com/birds-migratory_birds-migration-migrated-snowing-animals-CX903742_low.jpg)

## Objectives

- Practice running migrations
- Fixing schema errors
- Renaming columns, tables and changing field types

## Getting Started

- Fork and Clone

### Step 1: Installing Dependencies

```sh
npm install
```

Ensure our tests run correctly:

```sh
npm run test
```

### Step 2: Setting Up Our Database

```sh
sequelize db:create
```

```sh
sequelize db:migrate
```

```sh
psql sequelize_migrations_lab_development

\dt
```

## Lab

**READ ALL THE INSTRUCTIONS BEFORE PERFORMING ANY ACTIONS, DOING OTHERWISE WILL ENSURE THAT YOU HAVE TO START OVER**

All operations need to be completed in order! You'll be creating migrations for each step. Run `sequelize db:migrate` after each step unless directed otherwise. Check your work often using `npm run test` and `psql` to check the table names and columns.

1. Businesses has a huge problem, the table is uppercased! Fix the table name to be lowercased and plural. HINT: Look at the `Business` model for the correct `tableName`.

2. Locations shares the same problem as Businesses, correct the table naming conflict.

**If you've completed steps 1 and 2, at this point you can run the provided seed files, `sequelize db:seed:all`.**

3. The `businesses` table `phoneNmber` column is spelled incorrectly, the column should be `phoneNumber`, create a migration to rename the column name. Once the migration is successful, you'll need to make sure to update the `Business` model.

4. The `businesses` table has another problem, the `businessName` column is redundant, rename this field to just `name`. Run your migration and make the necessary modifications in the `Business` model. Remember the `businessName` key should reference the new `name` column.

At this point you should have `4` passing tests

## Resources

- [Sequelize Migrations](https://sequelize.org/master/manual/migrations.html)
- [Sequelize Queryinterface](https://sequelize.org/api/v6/class/src/dialects/abstract/query-interface.js~queryinterface)
- [Sequelize Migrations Lesson](https://github.com/SEI-R-1-25/u3_lesson_sequelize_migrations)
