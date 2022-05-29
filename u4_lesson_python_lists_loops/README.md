# Python Lists, Loops, and List Comprehension

![](https://cdn.analyticsvidhya.com/wp-content/uploads/2020/02/python.gif)

## Overview
You may have been wondering how Python handles large amounts of data, sort of how JavaScript does a similar thing with arrays. In this lesson, we'll learn about how Python does just that with `lists`, `loops`, and a special bit of magic called `list comprehension`.

## Objectives

- Learn how to build and manipulate python lists
- Learn how to loop through lists
- Learn List Comprehension

## Getting Started
- `Fork` and `clone` this repository.

___
## What Are Lists?

Lists are just a fancy term for `array`, most programming languages use the term `list` to describe a data structure that can hold multiple values that can all have different data types. List's are iterable and can be modified. Feel free to practice in the `main.py` file as we go along.

Here's an example of a list/array:

```js
let myArr = [1, 2, 3, 4]
let otherArr = new Array()
```

```python
my_list = [1,2,3,4]
other_list = list()
```

We can declare lists either by using `[ ]` brackets or with the `list` constructor/method.

## You Do

In `main.py` perform the following:

- Create a `list` and store it in a `nums` variable that contains all numbers from 1-5.
- Create a `list` and store it in a `chars` variable that contains all letters a-e.

___
## Accessing Items In A List

Accessing elements in an array/list can be as simple as selecting something at a given index, for example:

`Javascript`

```js
let myArr = [1, 2, 3]
myArr[0] // Returns 1
```

`Python`

```python
my_list = [1,2,3]
my_list[0] # Returns 1
```

Remember lists start at a `0` index.

## Accessing Multiple Items

Python has some great list accessing abilities, for example if we wanted to access all elements from the 0th index to the 3rd index.

We can select items in a range of numbers, the first number being the start and the second being the end:

```python
my_list = [1,2,3,4]
print(my_list[0:3]) # Prints 1,2,3
```

Python allows several options with list slicing that may be more useful depending on the situation.

  
```python

print(my_list[:4]) # prints elements before index 4

print(my_list[3:]) # prints all elements after index 3
```


What if we wanted to select an element starting from the end of the list? Well there's a way for that too!

```python
my_list = [1,2,3,4]
print(my_list[-2]) # prints 3
```
___
## Manipulating Lists

![](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.tenor.com%2Fimages%2Fc11fa8842fc320d242bb39f5525a990e%2Ftenor.gif%3Fitemid%3D7257765&f=1&nofb=1)

We can also manipulate lists in python such as adding items or joining lists. Let's see some examples:

If we wanted to join lists:

- In Javascript we can use the spread operator to join arrays:

  - > ```js
    > let numArr1 = [1, 2, 3]
    > let numArr2 = [4, 5, 6]
    > let allNums = [...numArr1, ...numArr2]
    > ```

- Or the concat method:
  - > ```js
    > let numArr1 = [1, 2, 3]
    > let numArr2 = [4, 5, 6]
    > let allNums = numArr1.concat(numArr2)
    > ```
- In python we can use the `+` operator:
  - > ```python
    > num_list1 = [1,2,3,]
    > num_list2 = [4,5,6]
    > all_nums = num_list1 + num_list2
    > ```

What if wanted to add to the end of a list ?

- Javascript has a `push` method:

  - > ```js
    > let arr = [1, 2, 3]
    > arr.push(4)
    > ```

- Python has an `append` method:
  - > ```py
    > my_list = [1,2,3]
    > my_list.append(4)
    > ```
   
Here is a list methods that you may find useful when working with lists in Python:

| Method | Description |
| --- | --- |
| .append( _element_ ) | Add a single element to the end of the list |
| .pop( _index_ ) | Removes element at the given index. If no index is specified, pop() removes and returns the last item in the list. |
| .index( _element_ ) | returns the index of the element in the list |
| .insert(_index_,_element_) | insert an element to the list at a specified index |
| .remove( _element_ ) | Removes the first item from the list equal to the input value |
| .count( _element_ ) | returns count of the element in the list |
| .reverse() | reverses the list |
| .sort() | sorts elements of a list |
| .copy() | returns a shallow copy of the list |
| len(_list_) | returns the total length of the list |


___
## Loops

![](https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmedia.giphy.com%2Fmedia%2FJNKKeUprOnjqw%2Fgiphy.gif&f=1&nofb=1)

Let's iterate through some elements. Believe it or not, loops in the python start with the `for` keyword as well!

`Javascript`

```js
for (let i = 0; i < 5; i++) {
  console.log(i)
}
```

`Python`

```py
for el in my_list:
  print(el)
```

As you can see, the syntax is much shorter in python. `my_list` is the item we are iterating through and `el` is each element in the list.

What if we wanted to just iterate from one number to another?

```py
for num in range(0,10):
  print(num)
```

The `range` method generates a list of numbers from 0 - 9. Remember `lists` start at the 0th index.

### List Comprehension

Python has an operation called `list comprehension`. Think of it as an inline for loop. Example:

```py
num_list = [(x) for x in range(0,8)]
```

Creates a list with numbers from 0 to 7. The above example translates to:

```py
num_list = []

for x in range(0,8):
  num_list.append(x)
```

We can also perform transformations using list comprehension:

```py
nums = [2,4,6,8]

multiples = [x*2 for x in nums]

print(multiples) # returns [4, 8, 12, 16]
```

We iterate through each element in nums and multiply it by 2, `x` is a temporary variable to represent an element in a list.

___
## You Do

You'll be working in `main.py`. Follow the instructions and test your work by running `list_test.py`.

## Recap
In this lesson, we learned about how `lists`, Python's version of arrays, can be accessed, manipulated, and iterated over. A few key concepts to note:
- Python lists can be sliced into sub-lists with list slicing syntax: `my_list[2:]`, `my_list[3:6]`, `my_list[:4]`
- Rather than `push`, Python uses `append` to add items to the end of a list
- Python for loops typically work with one of three ways:
  - For in Loops: `for item in my_list`
  - For in Range Loops: `for index in range(0, len(my_list):`
  - List Comprehension: `[item*2 for item in my_list]`

## Resources
- [Python List Methods (In Detail)](https://www.programiz.com/python-programming/methods/list)
- [Python Lists](https://www.tutorialspoint.com/python/python_lists.htm)
- [Python For Loops](https://www.dataquest.io/blog/python-for-loop-tutorial/)
- [Python List Comprehension](https://www.programiz.com/python-programming/list-comprehension)
- [Python While Loops](https://www.tutorialspoint.com/python/python_while_loop.htm)
