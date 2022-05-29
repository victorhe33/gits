# Python Functions

![](https://res.cloudinary.com/ahonore42/image/upload/v1615581981/ga/Screen_Shot_2021-03-12_at_2.45.05_PM_rnhmr0.png)

## Overview
In this lesson, we'll be learning about python function syntax, how it uses indentation to separate blocks of code, return statements and arguments, along with how it compares with JavaScript function syntax.

## Objectives

- Learn Python function syntax
- Learn proper indentation for code blocks
- Practice returning values from functions
- Practice passing arguments/parameters to functions

## Getting Started
- `Fork` and `clone` this repository and `cd` into the directory

## Function Syntax

In javascript we declare functions like this:

```js
const myFunc = () => {
  return 'Hi'
}
```

Let's see how we declare functions in python:

```python
def my_func():
  return 'Hi'
```

As you can see, we first define a function using the `def` keyword, we set the name of the function as `my_func` and add a set of parentheses, `()`, notice the `:` symbol. In python we use the `:` to define a block of code.

One important thing to note here, Python is very strict on indentation, you can either use `1 tab` or `2 spaces` to indent your code. Indentation is how python read's blocks of code.

![](https://4.bp.blogspot.com/-BbXKsKfUHZQ/WyRY2KuRHbI/AAAAAAAAARk/vW07XUE4ksEq1nnkH675PunAXkTA0PftwCLcBGAs/s320/20180616_how_to_write_a_function_quickly2.gif)

- Note: _If you do not indent your code, it will absolutely break and not compile._

## Function Arguments/Parameters

We can also pass in arguments and define parameters in Python functions by creating a variable in the parentheses, example:

```python
def sum_func(num):
  return num
```

`num` works as a placeholder to let our function know that it will receive something to perform a calculation on when it is invoked.

To invoke functions, it follows the same pattern as most programming languages, Example:

- JavaScript
    ```js
    const myFunc = () => {
      console.log('Hi)
    }
    myFunc()
    // Prints Hi To The Console
    ```
- Python
    ```python
    def myFunc():
      print('Hi')

    myFunc()
    # Prints Hi to the console
    ```

___
## You Do: Putting Functions To Use
Now that we've seen how python functions work, let's get a little practice using them! 

Follow the directions in `main.py` to complete this lab.

Test your code using `python3 func_test.py` , you should have 5 passing tests. Happy Coding!
___
## Recap
A few things worth reiterating with python functions:
- A colon `:` is used to denote the end of a function declaration
- Every block of code _must be_ indented
- `def` is the keyword to declare a function in python
- Arguments are passed into the parenthesis after the `function_name()`

## Resources
- [Intro to Python 3 Lesson](https://github.com/SEI-R-11-8/u4_lesson_python_intro)
- [Python Functions Docs](https://www.tutorialspoint.com/python/python_functions.htm)
