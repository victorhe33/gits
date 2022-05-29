# Python Classes and Object Oriented Programming

![](https://i.ytimg.com/vi/9DoFs5rjWYE/maxresdefault.jpg)

## Overview
In this lesson we'll learn about how to implement Object Oriented Programming with classes and inheritance in Python.

## Objectives

- Learn how to create classes in python.
- Learn how to re use class objects.
- Learn how to inherit from parent classes.

## Getting Started
- `Fork` and `clone` this repository

___
## What is Object Oriented Programming?

From [Educative.io](https://www.educative.io/blog/object-oriented-programming):

> Object Oriented programming (OOP) is a programming paradigm that relies on the concept of classes and objects. It is used to structure a software program into simple, reusable pieces of code blueprints (usually called classes), which are used to create individual instances of objects. There are many object-oriented programming languages including JavaScript, C++, Java, and Python.

> A class is an abstract blueprint used to create more specific, concrete objects. Classes often represent broad categories, like Car or Dog that share attributes. These classes define what attributes an instance of this type will have, like color, but not the value of those attributes for a specific object.

> Classes can also contain functions, called methods available only to objects of that type. These functions are defined within the class and perform some action helpful to that specific type of object.


## Object Oriented Programming

Object oriented programming (OOP) isn't a language or a tool. OOP is a style of programming — what we call a **programming paradigm**.  The four pillars of object oriented programming are:

<details>
  <summary><strong>1. Encapsulation</strong></summary>
  <p>Encapsulation is one method that we use to try to make complex systems easier to use.  Encapsulation is defined as the action of enclosing something in, or as if in, a capsule.  In programming, the capsule is an object.  This makes our code clearer and cleaner because all of the related parts are grouped together!</p>
  <p>We also use encapsulation to hide all of the really complex parts of our code, while providing simple ways to access the essential parts from the outside only when necessary.  This means we can isolate the impact of changes in the internal, hidden parts has on the overall system.</p>
</details>
<details>
  <summary><strong>2. Abstraction</strong></summary>
  <p> Abstraction is a concept that is closely related to encapsulation.  It's also a way to remove complexity.  Think of your phone.  It's got a pretty simple user Interface: maybe it has a screen and one button (maybe not even a button!), but the internal logic board of the phone is super complicated.  As a user, we don't need to know anything about how the phone's logic board works in order to use it. This is an example of abstraction in the real world.</p>
  <p>Both abstraction and encapsulation aim to reduce complexity in our code.  Encapsulation refers to the things we do to reduce the complexity in our implementation or how our code is actually written.   Abstraction refers to how we design or architect our code.  Thus abstraction happens when we plan and encapsulation happens when we execute the plan.</p>
</details>
<details>
  <summary><strong>3. Inheritance</strong></summary>
  <p>One of the chief problems with encapsulating all of our code into self contained objects is that there's a strong possibility that we'll have lots of duplicated code among objects of a similar type.  Inheritance helps us solve that problem.</p>
  <p>Let's put this in terms of a real life example too.  Imagine you've got a program with different types of users.  Some users are administrators who can do lots more in our app than customers can. Even though they are different they share a lot in common.  They both have emails, usernames, passwords, profile pictures and much more.</p>
  <p>Using inheritance we can put all of things that users have in common inside of one object called **User** and then create separate objects for an Admin and a Customer.  Both of the Admin and the Customer will **inherit** the properties and behaviors that they share in common from the User.  This helps make our code DRYer.</p>
</details>
<details>
  <summary><strong>4. Polymorphism</strong></summary>
  <p>Poly means many and morph means form, so polymorphism is many forms.  Lets imagine that you have a program with animals (it  could totally happen :smile:). All of the animals have the same method called move.  This method causes the animals to walk to a specific location on the screen.  It works great for some of our animals, but not for the fish or birds in our program.  They need a different type of implementation for moving, they need to swim or fly, not walk.  So the method move can take many forms, depending on the animal type that uses it!</p>
  <p>Polymorphism makes our code easier to understand and work with because it's way less complicated to remember that every animal has a move method, than to remember that the method for a dog is called walk and the one for the catfish is swim, or the one for the pigeon is fly.  It's also clearer to us if each type of animal is responsible for it's own implementation of move than to have a single method called move that uses a gigantic conditional statement to determine how that one method should be applied to different types of animals.</p>
</details>


## Defining Classes In Python

Classes can be defined in `Python` using the `class` keyword:

```py
class Person:
    pass
```

### Definining Constructors

Taking our `Person` class from above, if we wanted to provide certain attributes to our `Person` we need to define a constructor with the `__init__` method:

```py
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
```

The above is equivalent to:

```js
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}
```

You'll notice we're passing in an extra paremeter called `self`. `self` is used to reference a specific `instance` of a class when we create a new `Person`. It keeps a reference to which `name` belongs to which `instance`.

### Creating An Instance

Let's create a new `instance` of the `Person` class:

```py
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age


my_person = Person('Bob', 16)
print(my_person.name)
```

Here's the equivalent in Javascript:

```js
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

myPerson = new Person('Bob', 16)
```

By creating an `instance` we are creating new people utilizing a template that we defined as our `class Person`.

### Instance Methods

Let's add a method to our `Person` class and greet someone:

```py
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greeting(self):
        print('Hello my name is {name} and I am {age} years old!'.format(
            name=self.name, age=self.age))

my_person = Person('Bob', 16)
my_person.greeting()
```

Here's the equivalent in Javascript:

```js
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  greeting() {
    console.log(`Hello my name is ${this.name} and I am ${this.age} years old!`)
  }
}

myPerson = new Person('Bob', 16)
myPerson.greeting()
```

You should see `Hello my name is Bob and I am 16 years old!` printed to the terminal.

Class methods are unique to each `instance` of a class. `Instance` is just a fancy word for copy!

___
## Inheritance

Inheritance is a programming pattern to define a parent-child relationship. A child can inherit a parent's methods and attributes.

Here's a javascript example:

```js
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  greeting() {
    console.log(`Hello my name is ${this.name} and I am ${this.age} years old!`)
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age)
    this.grade = grade
  }

  greetClass() {
    console.log(`Hello my name is ${this.name} and I am in grade ${this.grade}`)
  }
}

myPerson = new Person('Bob', 16)
myPerson.greeting()
```

Now we'll take a look at how classes are inherited in Python:
```py
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greeting(self):
        print('Hello my name is {name} and I am {age} years old!'.format(
            name=self.name, age=self.age))

class Student(Person):
    def __init__(self, name, age, grade):
        super().__init__(name, age)
        self.grade = grade

    def greet_class(self):
        print('Hi my name is {name} and I am in grade {grade}'.format(
            name=self.name, grade=self.grade))
```


To inherit from a parent you'll notice we pass the parent class as an argument to our `Student` in this example. We create a constructor for student which accepts a name,age and grade. In order to pass some of those attributes back to the parent we utilize the `super` method and invoke the parents `__init__` or constructor and pass in the attributes from the student to person. The grade attribute should be only used in the Student class.

Let's see how the greetings behave:

```py
my_person = Student('Bob', 16, 6)
my_person.greeting()
my_person.greet_class()
```

You'll see two different messages printed to the terminal by running the `main.py`.

```
Hello my name is Bob and I am 16 years old!
Hi my name is Bob and I am in grade 6
```
___
## You Do

Follow the instructions in `main.py` to complete this exercise.

Finish each one of the ten problems before continuing


___
## Recap
In this lesson, we learned about how Python achieves Object Oriented Programming with classes and inheritance. A few important concepts to note:
- Rather than using a `constructor()` method like a JavaScript class would, Python classes use the `def __init__(self,...):` method after a class is declared. Example:
    
    ```python
    class Snake:
      def __init__(self, species, size):
        self.species = species
        self.size = size
    ```
- Python class methods require the `def` keyword when declared and have the same indentation as the class's initial `__init__(self,...)` method
- Python classes can be inherited by passing an existing class into its declaration and with the `super().__init__()` method, which is declared _within_ the initial `__init__(self,...)` method. Example:
    
    ```python
    class Python(Snake):
      def __init__(self, species, size, constriction):
        super().__init__(species, size):
          self.constriction = constriction
    ```

## Resources
- [Why Use Objects and Object Oriented Programming](https://levelup.gitconnected.com/why-learn-objects-oriented-programming-in-python-794cdccc4caa)
- [Python Classes](https://www.programiz.com/python-programming/class)
- [Python Inheritance](https://www.programiz.com/python-programming/inheritance)
