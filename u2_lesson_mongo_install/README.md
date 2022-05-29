# MongoDB Installation Walkthrough

## What is a Database?

A database is an organized collection of data, stored and accessed electronically.  There are many kinds of databases. A common type is a RDBMS (relational database management system).  Relational databases are frequently based on SQL (Structured Query Language)  and store data in tables and rows, much like an Excel spreadsheet/Google Sheet.

Another type of database is a NoSQL database, which don't store data in rows and columns.  In this unit, we'll be using MongoDB which is a very popular NoSQL database for building web applications, and in particular, building web applications that need to store a lot of data.

## What is Mongo?

MongoDB is a specific type of NoSQL database system called a  **document database**.  It stores data in a format called BSON, which is a JSON-like format. One of the key benefit of this format is that it is very easy to work with using JavaScript because it so closely resembles plain old JavaScript objects!

MongoDB is also much more scalable than relational databases due to this mechanism of data storage.  It means that we can store the data easily across many physical pieces of hardware since each "record", is a separate and distinct "document".



MongoDB is a fantastic, internationally used database system. We will be using it through our second unit.

##  Installing and setting up MongoDB on MacOS.

First of all, a prerequisite for MongoDB install is that our command line tools are up to date. To make sure, run:

```sh
xcode-select --install
```

Now for MongoDB. In our terminal, enter the commands:

```sh
brew tap mongodb/brew
```

Then we need to install the MongoDB Community Service...

```sh
brew install mongodb-community
```

Finally, we need to start up the service we just installed...

```sh
brew services start mongodb-community
```

Now if we run `brew services list`. You should see `mongodb-community` with the green word "started" to the right of it. Yay!

##  Linux/Ubuntu issues...

If you are getting any permission errors, simply add the Sudo (Super User Do) command before

```sh
sudo apt brew install mongo mongodb-community
```

If you got any errors there, please let your instructor know. Otherwise, you can verify that MongoDB is working correctly by running one of the following commands:

Now run `sudo systemctl status mongodb`. You should see a green circle and the words "active (running)" somewhere in the output.

## Running the Mongo Shell

If the service appears to be running, type `mongosh` and hit enter.

You should see something like this:

```
MongoDB shell version v4.2.0
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 4.2.0
```

The may be followed by some warnings/errors. Ignore these warnings/errors for now.
You should notice that your command prompt is gone, replaced with a `>`.
This means the MongoDB shell installed correctly. Press `Ctrl + c` to get back
to your terminal.

If there are any further errors, we may have to run

```sh
sudo apt update

sudo apt install -y mongodb
```

Please let your instructor know if you need to run these additional commands.

## MongoDB Databases, Collections and Documents

MongoDB is an application that runs as a **server** and can have many separate databases within it.

Each MongoDB **database** consists of collections.

Each **collection** is a set of documents.

Each **document** contains a set of data and attributes, known as fields.

However, in order to really use Mongo with deploying and sharing our data, we will need to sign up for a (free) account with what is called the MongoDB Atlas

[MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)

Once we have Mongo installed, and an account set up with Atlas, we can begin our journey into back end/server side coding next week.
