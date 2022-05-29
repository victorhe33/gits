# Where in the World is...

# ...Carmen Sandiego?!?

![Carmen](https://i.giphy.com/13n8txR8c9UDHG.gif)

## Overview
We're going to use what we've learned already about searching with SQL commands, and apply it to chase down and capture an elusive and world-renowned thief, Carmen Sandiego. Follow the clues, use the interweb - write down both the SQL commands/queries you used and your answers to the clues - and figure out where Carmen's headed so we can catch her and bring her in. It's up to you, gumshoe!

## Starter Code:
* You've been given a `world.sql` file that you run to import a bunch of data into a SQL database (instructions below).
* You've been given a `clues.sql` file that has clues for finding Carmen. Read the clues and record your SQL queries in this file.

### Getting Started:

From the command line...

1. `cd` into the `starter-code`
2. create a new database called `carmen`
3. populate it with the SQL found in `world.sql`

```
# Enter psql
psql

# Create database
CREATE DATABASE carmen;

# Connect to carmen
\c carmen
\i world.sql
```

**OR**

**Pro Tip:** You can do this in fewer steps with these commands. *Note: this is done from the **bash/zsh CLI** and not the psql CLI*

```bash
createdb carmen

psql -d carmen -f /your/path/to/this/file/starter-code/world.sql
```

Then, use the clues below to create the appropriate SQL queries to help you find Carmen and then tell us where she's heading!

### :mag: The Clues

* **Clue #1:** We recently got word that someone fitting Carmen Sandiego's description has been traveling through Southern Europe. She's most likely traveling someplace where she won't be noticed, so find the least populated country in Southern Europe, and we'll start looking for her there.

* **Clue #2:** Now that we're here, we have insight that Carmen was seen attending language classes in this country's officially recognized language. Check our databases and find out what language is spoken in this country, so we can call in a translator to work with you.

* **Clue #3:** We have new news on the classes Carmen attended: our gumshoes tell us she's moved on to a different country, a country where people speak _only_ the language she was learning. Find out which nearby country speaks nothing but that language.

* **Clue #4:** We're booking the first flight out: maybe we've actually got a chance to catch her this time. There are only two cities she could be flying to in the country. One is named the _same_ as the country – that would be too obvious. We're following our gut on this one; find out what other city in that country she might be flying to.

* **Clue #5:** Oh no, she pulled a switch: there are two cities with very similar names, but in totally different parts of the globe! She's headed to South America as we speak; go find a city whose name is _like_ the one we were headed to, but doesn't end the same. Find out the city, and do another search for what country it's in. Hurry!

* **Clue #6:** We're close! Our South American agent says she just got a taxi at the airport, and is headed towards the capital! Look up the country's capital, and get there pronto! Send us the name of where you're headed and we'll follow right behind you!

* **Clue #7:** She knows we're on to her: her taxi dropped her off at the international airport, and she beat us to the boarding gates. We have one chance to catch her, we just have to know where she's heading and beat her to the landing dock. HINT:Look at number 8.

* **Clue #8** Lucky for us, she's getting cocky. She left us a note, and I'm sure she thinks she's very clever, but if we can crack it, we can finally put her where she belongs – behind bars.

```
  Our playdate of late has been unusually fun –
  As an agent, I'll say, you've been a joy to outrun.
  And while the food here is great, and the people – so nice!
  I need a little more sunshine with my slice of life.
  So I'm off to add one to the population I find
  In a city of ninety-one thousand and now, eighty five.
```

![Bye](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.gfycat.com%2FInnocentSeriousChipmunk-max-1mb.gif&f=1&nofb=1)

## Resources
- [PostgreSQL tutorial](http://www.tutorialspoint.com/postgresql/)
- [PostgreSQL official documentation](http://www.postgresql.org/docs/)
- [SQL JOIN](http://www.dofactory.com/sql/join)
- [SQL Zoo](http://sqlzoo.net/) - _(SQL tutorial and practice problems)_
- [Hacker Rank](https://www.hackerrank.com/domains/sql/select) - _(You will need an account, its free! Also a good place to practice algorithms)_
- [Baptize Yourself in Peak 90s](https://youtu.be/roiJizt8jxw)
- [Musical Perfection](https://youtu.be/s1EIUP8tvbE)
