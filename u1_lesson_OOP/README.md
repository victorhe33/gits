# Object-Oriented Javascript

![Image Header](https://www.freecodecamp.org/news/content/images/2020/02/OOP-IN-JS-1.png)

## Overview
Object-oriented programming (OOP) is a programming paradigm based on the concept of `objects`, which contain data, in the form of fields, often known as `properties` and functions often known as `methods`. When you define a `class`, you define a *blueprint for an object*. This doesn't actually define any data, but it does define what the class name means, that is, what an object of the class will consist of and what operations can be performed on such an object. In this lesson, we'll be covering how to implement OOP with JavaScript.

## Getting Started
- Fork and Clone
- Create an `index.js` file

## Objectives

- Use the `new` keyword to create objects with shared properties and methods
- Describe the role of classes in JavaScript
- Explain the importance of Object-Oriented Programming
- Define the concept of inheritance as it pertains to classes
- Create a class that inherits from another using the `extends` and `super` keywords

#### What is an object in programming?

An object encapsulates related data and behavior in an organized structure.

We've already gotten exposure to Javascript objects using **object literal notation**. We could define a car object in this way:

```js
const car = {
  make: 'Honda',
  model: 'Civic',
  color: 'red',
  drive() {
    console.log('vroom vroom');
  },
  gps(location) {
    console.log(`Beep boop, driving to ${location}`);
  },
  paint(newColor) {
    console.log(`Your car has been painted ${newColor}`);
    this.color = newColor;
  },
};

```

What's nice about the above code snippet?

<details>

  <summary><strong>Some thoughts...</strong></summary>

  > * Related properties and methods are packaged together.
  > * Fewer global variables.
  > * Readability.

</details>

#### Why might we use an OOP approach to programming?

Object-oriented programming (OOP) provides us with opportunities to clean up our procedural code and model it more-closely to the external world.

OOP helps us to achieve the following...
  * **Abstraction:** hiding all but the relevant data about an object in order to reduce complexity and increase efficiency
  * **Encapsulation:** is the process of combining data and functions into a single unit
  * **Inheritance:** Enables new objects to receive or inherit the properties and methods of existing objects
  * **Polymorphism**: Allows for many forms of the same type of object through inheritance

OOP becomes **very** important as our front-end code grows in complexity. Even a simple app will have lots of code on the front-end to do things like...
* Send requests to a back-end to fetch / update / destroy data
* Update the state of the page as data changes
* Respond to events like clicking buttons

### Creating Objects

![Assembly](https://biol355.github.io/Lectures/Images/iteration/assembly_line.gif)

So far, we've had to make our objects 'by hand' (i.e. using object literals)...

```js
const celica = {
  model: 'Toyota Celica',
  color: 'limegreen',
  fuel:  100,
  drive() {
    this.fuel--;
    return 'Vroom!';
  },
  refuel() {
    this.fuel = 100;
  },
};

const civic = {
  model: 'Honda Civic',
  color: 'lemonchiffon',
  fuel:  100,
  drive() {
    this.fuel--;
    return 'Vroom!';
  },
  refuel() {
    this.fuel = 100;
  },
};
```

Even though we're technically using objects to organize our code, we can see a noticeable amount of duplication. Just imagine if we needed a hundred cars in our app! Our code would certainly not be considered "DRY".

As you may have noticed, some of these properties change between cars, and others stay the same. In the example above, while the `model` and `color` properties may vary, the `fuel` property and `drive` and `refuel` functions are the same for every car.

Making all of these similar objects by hand is just tedious. What if we could build a function that makes them for us?

### Create a `makeCar` Function

Define a function `makeCar` that takes two parameters - `model` and `color` - and returns an object literal representing a car using those params.

```js
// This should return a car object just like the previous example
const celica = makeCar('Toyota Celica', 'limegreen');
```

<details>
  <summary><strong>Solution...</strong></summary>

  ```js
  const makeCar = function(model, color){
    return {
      model: model,
      color: color,
      fuel:  100,
      drive: function() {
        this.fuel--;
        return 'Vroom!';
      },
      refuel: function() {
        this.fuel = 100;
      }
    }
  }
  ```

</details>

This is the basic idea behind OOP; we define a **blueprint** for an object and use it to generate multiple **instances** of it!

![Car Class Blueprint](https://vitalflux.com/wp-content/uploads/2014/10/classes_and_objects.gif)

## Classes

It's so common that we need to make objects with similar properties and methods that programming languages usually have some features to help with this.

In Javascript, ES6 added a feature called **classes** to accomplish this. A class serves as a **blueprint** for instantiating new objects.

Let's take a look the following `Car` class:

```js
class Car {
  constructor(model, color) {
    this.model = model;
    this.color = color;
    this.fuel = 100;
  }
  drive() {
    this.fuel--;
    return 'Vroom!';
  }
  refuel() {
    this.fuel = 100;
  }
}


const celica = new Car('Toy-Yoda Celica', 'limegreen');
const civic = new Car('Honda Civic', 'lemonchiffon');
```

Classes work a lot like the `makeCar` function we just created, but are a more performant and offer more robust features.  
 We use the `new` keyword to generate **instances** of a class (just like our earlier `celica` and `civic` examples).

> Note that classes typically are capital case to make it obvious
that they are classes. This isn't necessary, but is a convention you should follow.

### Make a Person Class

```js
class Person {
  // We use the constructor method to initialize properties for a class instance.
  // It takes whatever arguments we want to pass into an instance.
  constructor(initialName) {
    this.name = initialName;
    this.species = 'Homo Sapiens';
  }
  // We define any methods accessible to an instance outside of the constructor
  speak(){
    return `Hello! I’m ${this.name}`;
  }
}

const andy = new Person('Andy');
andy.speak(); // "Hello, I'm Andy"
```

#### `this`

![this](https://media.tenor.com/images/02226f988d3dca3e06ffd5698e4486f1/tenor.gif)

Notice the use of `this`, and the fact that we don't return from the class. Here's why we write classes this way...

When we generate a class instance using `new`, Javascript will automatically...
  1. Create a new, empty object for us
  2. Generate a context for that object (`this` -> the new object)
  3. Return the object

#### Where are the Commas?

Unlike object notation, you do not need to use commas when separating class methods.


## Inheritance

Although OOP can help us keep our Javascript nice and clean, it's still easy to duplicate code when defining multiple classes. Consider the following example...

```js
class Dog {
  constructor(name, breed, tail) {
    this.name = name;
    this.breed = breed;
    this.waggingTail = tail;
    this.diet = [];
  }
  eat(food) {
    this.diet.push(food);
    console.log(this.diet);
  }
  bark() {
    return `Bark! Hello, this is dog. My name is ${this.name}`;
  }
}

class Cat {
  constructor(name, breed, numLives) {
    this.name = name;
    this.breed = breed;
    this.numLives = numLives;
    this.diet = [];
  }
  eat(food) {
    this.diet.push(food);
    console.log(this.diet);
  }
  meow() {
    return `Meow! I am not a dog! My name is ${this.name}`
  }
}
```

Here we have two classes: `Dog` and `Cat`. They have some things in common: `name`, `breed`, `diet` and `eat`. They do differ, however, in that one `bark`s and the other `meow`s.

Imagine that we had to create a number of other classes - `Horse`, `Goat`, `Pig`, etc. - all of which share the same aforementioned properties but also have methods that are particular to the class.

How could we refactor this so that we don't have to keep writing out the shared class properties and methods. Enter **inheritance**

```js
class Animal{
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.diet = [];
  }
  eat(food) {
    this.diet.push(food);
    console.log(this.diet);
  }
}

const dog = new Animal('Fido', 'Beagle');
```

Here we've defined an `Animal` class. It contains the properties and methods that are common among specific animal classes. Wouldn't it be nice if `Dog` and `Cat` could just reference this "parent" `Animal` class so that the only things we need to put in their "child" class definitions are the properties and methods that are particular to them (e.g., `bark`, `meow`).

Lucky for us, we can do that...

```js
class Animal {
  constructor(name, breed){
    this.name = name;
    this.breed = breed;
    this.diet = [];
  }
  eat(food){
    this.diet.push(food);
    console.log(this.diet);
  }
}

class Dog extends Animal {
  constructor(name, breed, tail){
    this.waggingTail = tail;
  }
  bark(){
    return `Bark! Hello, this is dog. My name is ${this.name}`
  }
}

class Cat extends Animal {
  constructor(name, breed, numLives){
    this.numLives = numLives;
  }
  meow(){
    return `Meow! I am not a dog! My name is ${this.name}`
  }
}
```

The clincher is `extends`. Whatever class is to the left of the `extends` keyword should inherit the properties and methods that belongs to the class to the right of the keyword. Let's see if this works...

```js
// Let's test out our parent. It just needs a name and breed.
const goat = new Animal("Gregory", "Mountain Goat");

// And now the children.
const fido = new Dog('Fido', 'Beagle', true);
console.log(fido); // "this is not defined"
```

That didn't work out the way we expected. That's because we're forgetting one thing. When creating an instance of a child class, we need to make sure it invokes the constructor of the parent (`Animal`) class.

We can do that using the keyword `super()`

```js
class Dog extends Animal {
  constructor(name, breed, tail){
    super(name, breed);
    this.waggingTail = tail;
  }
  bark(){
    return `Bark! Hello, this is dog. My name is ${this.name}`
  }
}
```

`super()` calls the constructor of the parent class. In the above example, once `super` does what it needs to do, it then runs through the rest of `Dog`s constructor.

- In order to give an instance of a child class context (i.e., be able to use `this`), you must call `super`.

- If the keyword `super` is confusing, think of a supervisor to understand that we're calling out to the next level above us (to the parent class's constructor).

## Recap
In JavaScript Object Oriented Programming we use `classes` to create reusable data models for objects. Classes use `constructor()` methods to take in data for a `new` object created by the class. Classes can also be inherited by `extending` another pre-defined class and calling the parent class's constructor with the `super()` method. A few JavaScript key words worth noting with OOP:
- `class` - defines a new class (reusable object model) Ex: `class Dog { //methods and properties here }`
- `constructor()` - primary method for instantiating the properties of a class
- `this` - creates context for object to refer to itself from within its methods
- `new` - used to create a new instance of a class. Ex: `const lab = new Dog()`
- `extends` - used to inherit the methods and properties of an existing class when defining a new class
- `super()` - method for calling to a parent class's constructor, inheriting it's arguments and properties

## Resources

* [MDN Documentation on Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
* [Introduction to Javascript ES6 Classes](https://strongloop.com/strongblog/an-introduction-to-javascript-es6-classes/)
* [Getters, Setters, and Organizing Responsibility in Javascript](http://raganwald.com/2015/08/24/ready-get-set-go.html)
* [Static Members in ES6](http://odetocode.com/blogs/scott/archive/2015/02/02/static-members-in-es6.aspx)

#### Prototypical Inheritance

* [Inheritance and the Prototype Chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
* [ES6 Classes and Javascript Prototypes](https://reinteractive.com/posts/235-es6-classes-and-javascript-prototypes)
* [Master the Javascript Interview: What's the Difference Between Class & Prototypical Inheritance](https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9#.uzl8ohf8c)
