# Classes & Donut Adventure

![dancing donut](https://media.giphy.com/media/ToMjGpPgn8mV9iUOOw8/giphy.gif)

## Homework Overview

In this lab, you will be practicing object creation, using object methods, and class inheritance.

## Getting Started

- Fork and clone this repo.
- `cd` into the folder and create two files: `objects.js` and `adventure.js`.  
- You will write the code for the sections up to Daring Adventure in `objects.js`.
- You will write the code for Daring Adventure in `adventure.js`.

---

### Creating Classes 

### Hamster 
- attributes: 
  - owner - string, initially set as an empty string
  - name - string, set the name from parameter in constructor method 
  - price - integer, set as 15
- methods:
  - wheelRun() - log "squeak squeak"
  - eatFood() - log "nibble nibble"
  - getPrice() - return the price 

:red_circle: **Commit your work!** <br>
Your commit message should read something like: <br>
"created hamster class"

### Person
- attributes:
  - name - set name from parameter in constructor method
  - age - initially 0
  - height - initially 0
  - weight - initially 0
  - mood - integer starting at 0 initially
  - hamsters - empty array initially
  - bankAccount - initially set to 0
- methods:
  - getName() - returns name
  - getAge() - returns age
  - getWeight() - returns weight
  - greet() - logs a message with person's name
  - eat() - increment weight, increment mood
  - exercise() - decrement weight
  - ageUp() - increment age, increment height, increment weight, decrement mood, increment bank account by 10 (birthday money)
  - buyHamster(hamster) - push the hamster object onto the hamster array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice())

:red_circle: **Commit your work!** <br>
Your commit message should read something like: <br>
"created person class"

### Create a Story with your Person class 
Feel free to update or add methods to automate some of these tasks.

1. Instantiate a new Person named Timmy
1. Age Timmy five years
1. At this point Timmy's a little bummed.  As a precocious child, he feels he's "seen it all" already.  Have him eat five times.
1. Now Timmy's a little heavier than he wants to be.  Kindergarten's coming up and he wants to feel healthier before starting.  Have him exercise five times
1. Age Timmy 9 years
1. Create a hamster named "Gus"
1. Set Gus's owner to the string "Timmy"
1. Have Timmy "buy" Gus
1. Age Timmy 15 years
1. Have Timmy eat twice
1. Have Timmy exercise twice

:red_circle: **Commit your work!** <br>
Your commit message should read something like: <br>
"created timmys story"

---

## Daring Adventure!

> The Adventure of Dougie the Donut on the Streets of NYC.

> Dougie is a donut who has decided to walk his way from the Flat Iron District to Times Square where he wants to show off his sweet moves. Along the way, Dougie is approached by his arch nemesis Pizza Rat. Sometimes they battle, sometimes they just talk smack at each other. Anyway that it goes, let's try to get Dougie safely to Times Square!

For this section of the homework, you'll be making two objects that will interact. First we will create a Hero class, then an Enemy class, and instantiate our two objects from those classes.

### Our Hero 

Let's create our Hero class!

#### Attributes:
- name: set name from parameter in constructor method
- health: initially 100
- objects: use the following object 
    ```
    {
        sprinkleSpray: 5,
        sugarShock: 10
    }
    ```
- catchPhrases: use the following array 
    ``` 
    ['i\'m fresher than day old pizza', 
     'you can\'t count my calories']
    ```
    
#### Methods:
- talkSass: logs one of his catchphrases randomly
- announceHealth: logs his current health
- battle: for now,  logs `'i\'m ready to rumble'`

Now, using this Hero class, create an instance of our hero Dougie the donut.

:red_circle: **Commit your work!** <br>
Your commit message should read something like: <br>
"created our hero dougie"

### Our Enemy 

Now let's create our Enemy class!

#### Attributes:
- name: set name from parameter in constructor method
- health: initially 100
- objects: use the following object 
    ```
    {
        pepperoniStars: 5,
        cheeseGrease: 10    
    }
    ```
- catchPhrases: 
    ```
    ['i\'m youtube famous',
    'i\'m more dangerous than an uncovered sewer']
    ```
    
#### Methods:
- talkSmack: logs one of his catchphrases randomly
- announceHealth: logs his current health
- battle: for now, logs `i\'m gonna flatten you like a slice of pepperoni!`

Now, using this Enemy class, create an instance of the enemy Pizza Rat.

:red_circle: **Commit your work!** <br>
Your commit message should read something like: <br>
"created our enemy pizza rat"

### Walking Down the Street

Now, let's write their story! Dougie is walking down Flat Iron -- but oh no! He runs into Pizza rat!

1. Have Dougie `talkSass` 
1. Have Pizza Rat `talkSmack`
1. Have Dougie `announceHealth`
1. Have Pizza Rat `announceHealth`

### Battle!

Things have escalated between Dougie and Pizza Rat! 

1. Upgrade their battle methods so that it accesses one of their objects and console log its hitpoints.<br>
**Bonus** [Utilize the name of each weapon by accesing the object's keys.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
1. Keep upgrading this battle method to accept an argument called enemy so that when you call on the battle method you can pass in the entire Dougie or Pizza Rat object as the parameter. (i.e. `dougie.battle(pizzaRat)`)
1. Now that we are able to pass in Dougie or Pizza Rat as an object, we can make it so that our battle method subtracts from their health. 
  - Using the hitpoints from the weapon they're using, subtract that amount from the enemy's health (i.e. If Dougie battles Pizza Rat using sprinkleSpray, subtract sprinkleSpray's hitpoint value (5) from Pizza Rat's health)
  - Console log the enemy name and their new health value (i.e. 'Dougie got hit by pepperoniStars! His health is now at 95!')

Now, they can battle!

1. Have Pizza Rat `battle` Dougie
1. Have Dougie `battle` Pizza Rat
1. Have Pizza Rat and Dougie both `announceHealth` to make sure their health has decreased! 

:red_circle: **Commit your work!** <br>
Your commit message should read something like: <br>
"dougie and pizza rat have fought"

---

## Requirements

1. An `objects.js` file with a hamster class, a person class, and a simulated story about Timmy.
1. An `adventure.js` file that simulates the daring adventure outlined battle above. 
1. Your JavaScript files MUST run without syntax errors. If there are errors you can't solve, comment them out and leave a comment above explaining what is wrong

## Bonus

- Make the battle into a game with an ending, until someone has 0 health left.
- Make a parent class that the hero and enemy can inherit from (maybe call it Denizen)?
- Randomize the weapon choice in the battle method.
- Expand this to your heart's content! Sky is the limit!
