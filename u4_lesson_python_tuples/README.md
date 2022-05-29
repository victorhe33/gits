# Python Tuples

![](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fresources.stdio.vn%2Fcontent%2Farticle%2Ftim-hieu-ve-tuples-trong-python%2Fthumbnail-hd%2Fblob-1599048317319%401280x720.jpg&f=1&nofb=1)

## Overview
In this lesson, we'll learn about Python tuples and their proper use cases.

## Objectives

- Learn proper use of tuple data types
- How to work with tuples
- Learn the limitations of tuples

## Getting Started
- `Fork` and `clone` this repository

___
## What Are Tuples

A tuple is a collection of objects which ordered and immutable. Tuples are sequences, just like lists. The differences between tuples and lists are, the tuples cannot be changed unlike lists and tuples use parentheses, whereas lists use square brackets.

Unfortunately `javascript` does not have a tuple equivalent as of this writing.

A tuple is declared by using `()` or the `tuple` constructor, example:

```py
tuppy = ()

new_tup = tuple()
```

Here's an example of a tuple:

```py
my_tup = (1,3,4)
```

Tuples can have a mixture of data types:

```py
mixed_tup = (1,'String',False, None)
```

A tuple cannot be modified in any way, it's best used for data that you do not want to be modified. For example if you look at the sequelize insert queries, you'll see that they are using something similar to `tuples`:

```sql
INSERT INTO "task" ("id","created_at","updated_at","name","status") VALUES (DEFAULT,'2018-10-23 13:58:05.380 +00:00','2018-10-23 13:58:05.380 +00:00','First task',1) RETURNING *
```

## Accessing Tuple Values

Accessing values in tuples is performed the same way we access items in a list:

```py
my_tup = (1,2,3,4)
print(my_tup[1]) # Returns 2
print(my_tup[1:4]) # Returns 2,3
```

We can also iterate through tuples:

```py
my_tup = ('Hello', 'World')

for word in my_tup:
    print(word) # Prinst Hello, World
```

## Tuple Methods

Python has the ability to read tuple values:

- Finding Tuples Max Value:

    ```py
      tup = (1,2,3)
      max(tup) # Returns 3
    ```
- Finding Tuples Min Value:

    ```py
      tup = (1,34,21)
      min(tup) # returns 1
    ```
- Converting Lists Into Tuples:

    ```py
      my_list = [1,2,3,4]
      new_tup = tuple(my_list)
    ```
- Converting Tuples Into Lists:
    
    ```py
      my_tup = (1,2,3)
      my_list = list(my_tup)
    ```
- Deleting Tuples:
 
    ```py
      my_tup = (1,2,3,4)
      del my_tup
      print(my_tup) # my_tup is undefined
    ```

___
## You Do

Follow the directions in `main.py`, test your code with `python3 tuple_test.py`.

## Recap
In this lesson we learned about `tuples` in Python. A few key things to note about tuples:
- Tuples are immutable, meaning that they cannot be modified or updated
- Tuples are typically used for data that you want to be secure when passed on to another function or operation

## Resources
- [Python Tuples](https://www.tutorialspoint.com/python/python_tuples.htm)
- Article: [Why Use Tuples In Python?](https://python.plainenglish.io/tuples-in-python-why-to-use-them-and-how-you-might-create-them-on-accident-95bde873b062)
