# Django REST API Lab + Homework

Now that we have experience working with multiple forms of relational databases through Sequelize and now Django, lets build up a quick database to practice up our skills.

Create a table of teams in a sports league (any league - NFL, NHL, MLB, NBA). Each team should have a Name, Location, Conference, as well as a number of Wins and Losses through the season. Once our Teams model has been created, lets add some players to each team. Each player should have a name, position, age, a variable whether or not they are on the Injured Reserved list, and any number of other stats that you think are relevant. These players should belong to their respective teams.

What kind of relationship is Team -> Players? How about Players -> Teams?

### You do not have to create data for Every team in the league. You do not have to add a complete roster (~30 teams with 30 players each is a lot!) to each team, but we do want to see at least 3 players on each team that you create.

Bonus - Lets take this up a notch by adding a 3rd model in - set up your data so that each team belongs to a specific Conference (North, South, East, West). Again, you do not have to put in every single team that exists in the league, but we want to see you creating at least 2 conferences, that have at least 3 teams within each. 
