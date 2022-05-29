# Higher Order Functions

![High Order Functions](https://miro.medium.com/max/812/1*-kjr_j7fmoQNIGLf8eZIgw.jpeg)

## Lesson Overview
In this lesson, we'll learn all about High Order Functions and their usage in javascript.

## Getting Started
- Fork and Clone
- Open this repo in your code editor
- Touch an `index.js` file

## Objectives
  - Review "for loops" and the "forEach" method
  - Learn common array methods .map(), .filter(), and .reduce()
  - Learn how to chain these methods
  
## Lesson Instructions
In JavaScript, functions are first-class citizens, which means, we can pass functions around like values. **Higher Order Functions** are functions that pass a function as an argument or return a function as a value.

### High Order Functions w/ Food!

![map, filter, reduce with emoji](https://i.redd.it/yf7rw3pjiapx.jpg)

### Review: [for loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)!

```javascript
const numbers = [1, 2, 3, 4, 5]

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i])
}
// 1 2 3 4 5
```


### [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

- You can call the forEach method on any array and pass it a function to execute on each item in the array.

```javascript
const numbers = [1, 2, 3, 4, 5]

numbers.forEach((element) => {
  console.log(element);
})
// 1 2 3 4 5
```


### [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

`.map()` will take an array, and produce a new array with new values. In a function you define what each value in the array should be based on an existing item.

```js
const words = ['the', 'world', 'is', 'round', 'like', 'an', 'orange']

const wordLengths = words.map((word) => { return word.length })
// wordLengths = [ 3, 5, 2, 5, 4, 2, 6 ]
```

```js
const words = ['the', 'world', 'is', 'round', 'like', 'an', 'orange']

const wordsWrappedInX = words.map((word) => { 
  const newWord = 'x' + word + 'x'
  return newWord
})
// wordsWrappedInX = [ 'xthex', 'xworldx', 'xisx', 'xroundx', 'xlikex', 'xanx', 'xorangex' ]
```


### [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

`.filter()` will take an array, and produce a new array that only contains some of the items. Each item in the array runs through a function. If the function returns true, the item is included in the new array.

```js
const words = ['the', 'world', 'is', 'round', 'like', 'an', 'orange']

const shortWords = words.filter((word) => { return word.length <= 3 })
// shortWords = [ 'the', 'is', 'an' ]
```


```js
const words = ['the', 'world', 'is', 'round', 'like', 'an', 'orange']

const wordsThatStartWithR = words.filter((word) => { return word[0] === 'r' })
// wordsThatStartWithR = ['round']
```


### [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
- The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

```javascript
const numbers = [1, 2, 3, 4, 5]

const sum = numbers.reduce((accumulator, value) => {
  return accumulator + value
}, 0)
console.log(sum)
// 15
```

__NOTE__ The single value returned can be an object or array. Often in examples it's a number or string but you can return anything. Reduce is extremely powerful and all other iterators can be written using it. It's tough to wrap one's mind around so don't worry if this one is inscrutable for now. We'll revisit it now and again...and again and again.

### [some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
- The `some()` method tests whether at least one element in the array passes the test implemented by the provided function. If at least one element in the array passes the test of the provided function `true` is returned.  If none of the elements pass the test `false` is returned.

```javascript
const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const greaterThanThree = (element) => element > 3;

console.log(array.some(greaterThanThree));
// expected output: true
```

### Method chaining & using declared functions

- When using these array methods we can method chain. So instead of doing:

```javascript
const numbers = [1, 2, 3, 4, 5];

const mappedNumbers = numbers.map((element) => {
  return element + 1;
});

console.log(mappedNumbers)
// [ 2, 3, 4, 5, 6 ]

const filteredNumbers = mappedNumbers.filter((element) => {
  return element % 2 === 0;
});

console.log(filteredNumbers)
// [ 2, 4, 6 ]
```

We can do:

```javascript
const numbers = [1, 2, 3, 4, 5];

const filteredAndMappedNumbers = numbers.map((element) => {
  return element + 1;
}).filter((element) => {
  return element % 2 === 0;
});
console.log(filteredAndMappedNumbers)
[ 2, 4, 6 ]
```

Furthermore, we don't have to inline the anonymous functions, we can declare them elsewhere:

```javascript
const numbers = [1, 2, 3, 4, 5];

const add1 = (num) => {
  return num + 1;
}

const isEven = (num) => {
  return num % 2 === 0;
}

const result = numbers.map(add1).filter(isEven);

console.log(result)
[ 2, 4, 6 ]
```

### Bonus Challenge

Write your own `map` and `filter` using only `reduce` (i.e. no for loops)

## Lesson Recap
We learned how we can use forEach on each item in an array. We also learned about the all-important array methods .map(), .filter(), and .reduce(). We also learned how to use method chaining to more efficiently affect our data.

## Resources
 - [MDN: forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
 - [MDN: Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#)
