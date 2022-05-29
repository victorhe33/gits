# Introduction To Python 3

![](https://analyticsindiamag.com/wp-content/uploads/2019/10/python-1-1600x901.jpg)

## Overview
In this lesson we'll discuss why Python 3 is a popular and valuable programming language in the world today. We'll also be covering basic syntax in relation to JavaScript syntax, and how to set up a python environment.

## Getting Started

We'll start by installing Python 3:

### Mac Users

```sh
brew install python3
```

```sh
python3 --version
```

### WSL

```sh
sudo apt update && sudo apt upgrade
```

```sh
sudo apt install python3 python3-pip ipython3
```

```sh
python3 --version
```

## VsCode Extensions

Install the following extension for vsCode:

- [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python)

Open the `main.py` file, vsCode will prompt you to install a few things such as:

- Linter, select `pylint`
- Formatter, select `autopep`

The python language extension gives us better support for the python language such as, intellisense, autocomplete and linting.

## What Is Python

From [Python.org](https://www.python.org/doc/essays/blurb/):

> Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development, as well as for use as a scripting or glue language to connect existing components together. Python's simple, easy to learn syntax emphasizes readability and therefore reduces the cost of program maintenance. Python supports modules and packages, which encourages program modularity and code reuse. The Python interpreter and the extensive standard library are available in source or binary form without charge for all major platforms, and can be freely distributed.

Take a few minutes to read this article about why Python has become so popular:

**[Why Is Python Popular](https://medium.com/@trungluongquang/why-python-is-popular-despite-being-super-slow-83a8320412a9)**

Python has become popular in the world of data science because of it's ability to easliy parse various types of files and data formats, although not the fastest, it's syntactically easy to understand as it looks almost like plain english. It's a human readable programming language.

___
## Python Basics and Syntax

### Data Types

Python has similar data types to javascript, everything from numbers to objects. However some data types in python have a different name, we'll see more of that at another time. In the meantime, here's a list of python data types and their corresponding javascript equal:

| Type      | Python Type                        | Js Type              | Mutable |
| --------- | ---------------------------------- | -------------------- | ------- |
| string    | "string" or 'string'               | "string" or 'string' | Yes     |
| integer   | `32`                               | `32`                 | Yes     |
| float     | `3.55`                             | `3.55`               | yes     |
| object    | `{"myKey": "myValue"}` => Dictionary | `{myKey:"myValue"} ` | Yes     |
| array     | `["Hello","World"]` => List        | `["Hello", "World"]` | Yes     |
| null      | `None`                             | `null`               | No      |
| tuple     | `('My','Tuple')`                   | N/A                  | No      |
| boolean   | `True` `False`                     | `true` `false`       | yes     |
| undefined | N/A                                | `undefined`          | no      |

### Variables

In javascript, we declare variables in `camelCase` in Python, we use `snake_case` for multiple words or lowercase for a single word. We store the value for the variable using the `=` sign.

Let's practice defining some variables in the `main.py` file, set each variable to its corresponding type, Example: `some_var = 'Hi'`

- Create a variable for your name, string.
- Create a variable for number of items, integer.
- Create a variable for max sum, integer.
- Create a variable for completed, boolean.
- Create a variable for items, none.
- Create a variable for numbers, list.
- Create a variable for unique items, dictionary.

### Comments

To create comments in python, we use the `#` symbol at the beginning of the line, practice writing some comments in `main.py`:

- Write a comment that says `Hello Big Blue World`, each word should be on it's own line.

### Printing Results To The Console

To print results to the console, we use the `print` function like so: `print("My Message")`

Practice logging things to the console, we'll only be utilizing strings so put everything in a set of quotes `''`:

- Log your age to the console.
- Log your name to the console.

Execute the file by running `python3 main.py` in your terminal in the `intro-to-python` directory.

### Arithmetic Operators

Python has basic math operators built in just like many other programming languages. Here's a list of those operators:

| Operator | Operation                        |
| -------- | -------------------------------- |
| `+`      | addition                         |
| `-`      | subtraction                      |
| `*`      | multiplication                   |
| `/`      | division                         |
| `%`      | modulus => returns the remainder |
| `**`     | exponentiation                   |
| `+=`     | plus equals                      |

### Useful String Methods

- `'{var}'.format(var='Cat') => Works like template literals`
- `'' + '' => String Concatenation`
___
## You Do

Let's do some basic math problems, work in the `main.py` file you'll be performing the following and printing them. Check your work by running the `main.py` file => `python3 main.py`:

- Create a variable to store the sum of 10 plus 10.
- Create a variable to store the result of 23 minus 43.
- Create a variable to show the remainder of 4.
- Create a variable for the result of 2 times 3.
- Create a variable to store the result of 10 divided by 5.
- Create a variable to store the value of 3 to the 4th power.
- Create a variable to store any number, using the plus equals operator add 10 to that variable

## Recap

As you can see, python has many similarities to other programming languages. A lot of what you've learned in javascript can translate to python! Certain data types go by different names and variables are set up slightly different.

## Resources
- [Python 3 Language Reference Docs](https://docs.python.org/3/reference/index.html)
- Article: [What is Python Used For? 7 Major Uses](https://www.bitdegree.org/tutorials/what-is-python-used-for/)
