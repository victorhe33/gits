# Star Wars, the Command Line, and The Battle for the Fate of the Universe

![star wars theme image](https://res.cloudinary.com/ahonore42/image/upload/v1611100619/starwars-canon-banner_silgff.jpg)

## Overview
Working with the terminal command line is a key skill to develop as a programmer. Since you'll be using the command line on a daily basis, you should be comfortable using it. In this deliverable we'll be using the command line to create and organize a file tree representation of the Star Wars universe. Let's explore the Star Wars narrative using the command line!

## Getting Started
* `Fork` and `clone` this repository and `cd` into it.
* Open this directory in VS Code with:
    * `code .`

## Instructions
* There are three files `act1.sh`, `act2.sh`, `act3.sh` for each act. 
* Within each act, there are prompts for each command (or group of commands) that need to be executed.
* Once you have successfully completed a command, write your command underneath its respective prompt.
* As you work, make sure you `git add .` and `git commit -m "YOUR MESSAGE HERE"` after completing each act.
* After you have fully completed this deliverable you will use the `history` command to record your terminal history, which should be copied into the `solution.txt` file (more information on that below)

## Save the Rebellion!
* start in `act1.sh`
* In this act, we will introduce the star wars universe with the Rebellion, Empire, Death Star, Darth Vader, and Emperor Palpatine!
* At the end of `act1.sh`, your file tree should look like this:

<img height=200 src="https://res.cloudinary.com/ahonore42/image/upload/v1611102583/ga/act1.png" alt="act1" />

## Act 2
* We are introduced to our heroes!
* After Princess Leia calls on Obi-Wan for help, Han Solo, Chewbacca, Luke Skywalker, and Obi-Wan join forces and fly to the Death Star on the Millenium Falcon to rescue her from Darth Vader
* At the end of `act2.sh` your file tree should look like this:

<img height=200 src="https://res.cloudinary.com/ahonore42/image/upload/v1611102604/ga/act2.png" alt="act2" />

## Act 3 
* After managing to successfully rescue Princess Leia, our heros learn that they cannot escape the Death Star's tractor beam
* Obi-Wan is able to shut it off, but in the process he is caught in a duel with Darth Vader and chooses to merge his consciousness with The Force
* How will our heroes prevail?
* At the end of `act3.sh` your file tree should look like this:

<img height=200 src="https://res.cloudinary.com/ahonore42/image/upload/v1611102619/ga/act3.png" alt="act3" />

## You did it! The Rebellion is saved (for now...)!
* Now we'll need to record this epic journey
* From the command line we'll use the `history` command to show the recent commands we've entered to accomplish this feat
```
history | tail -n 250
```
* This command will limit the history to the last 250 commands, but the number can be changed if more lines are needed
* Copy and paste your terminal history into the `solution.txt` file to finish this deliverable

![star-wars-the-end](https://media.giphy.com/media/iQn33nEos213i/giphy.gif)

## Submission Guidelines
* Pull Requests must be submitted utilizing these guidelines: [PR Guidelines](https://github.com/SEI-R-2-22/template_pull_request)

## Resources
* [Terminal Cheatsheet](https://gist.github.com/cferdinandi/ef665330286fd5d7127d)
