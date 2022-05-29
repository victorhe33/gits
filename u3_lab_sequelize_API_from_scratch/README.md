# Express Sequelize API from Scratch

![Baloo](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.gfycat.com%2FEmbellishedWideEastrussiancoursinghounds-size_restricted.gif&f=1&nofb=1)

## Overview
In this lab, we'll be building our very own Express Sequelize API from nothing! We'll start in the design process with an ERD and proceed all the way through to testing our API out with Insomnia.

## Getting Started
- `fork` and `clone`
- Read through the FULL INSTRUCTIONS before starting this lab

## Instructions
Your goal is to create a Node/Express/Sequelize server that can be queried externally. To test this, you'll need Insomnia.

## Recommended Process
- Create an ERD to establish what sort of models you'll want to be working with. **(Exactly `3` models should be created)**.
- Create an entry point by `touching` either `server.js`, `app.js`, or `index.js`
- `npm init -y` to initialize your project with Node
- `npm i pg sequelize express cors body-parser` to install proper dependencies
- `npm i @ngneat/falso` to install dependencies
- Set up your scripts the in `package.json` to run your server.
- `sequelize init` to initialize this as a sequelize project
- Make sure that the dialect in your config.json is `postgres`, remove unnecessary fields, and change the name of your database to the name you'd like to use
- Create your database with `sequelize db:create`
- Create your models with `sequelize model:generate --name  --attributes`
- Set up proper associations between your models 
- Migrate your database with `sequelize db:migrate`
- Create `routes` and `controllers` folders with an `AppRouter.js` in your Routes folder
- Set up your server entry point like this:
```js
const express = require('express')
const cors = require('cors')

const app = express()

const AppRouter = require('./routes/AppRouter')

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.json({ message: 'Server Works' }))
app.use('/api', AppRouter)
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
```

## Requirements
- Your API should have exactly 3 models with associations between them
- At least one model should have queries for full CRUD functionality

## Recap
If completed correctly, you've gone through the entire process of conceptualizing your database with an ERD, starting a Node project from scratch with `npm init -y`, and adding in Sequelize, setting up models/routes/controllers, model associations, and queries to interact with the database.  This is everything you need to set up your backend for a full stack application! Feel the power!

![Dance](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FykUYsNYRvrprq%2Fgiphy.gif&f=1&nofb=1)

## Resources
- [Express Sequelize](https://github.com/SEI-R-4-26/u3_lesson_express_sequelize)
- [Sequelize Cheatsheet](https://github.com/SEI-R-4-26/u3_cheatsheet_sequelize)
