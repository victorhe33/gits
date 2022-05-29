/*-----------------------------------------------------------------
Challenge: 00-sayHello (example)

Difficulty: Basic

Prompt:

Write a function called sayHello that returns the string "Hello!".

Examples:

sayHello() //=> Hello!
-----------------------------------------------------------------*/
// Your solution for 00-sayHello (example) here:

function sayHello() {
  return 'Hello!'
}

/*-----------------------------------------------------------------
  Challenge: 01-addOne
  
  Difficulty: Basic
  
  Prompt:
  
  Write a function called addOne that takes a single number as an argument and returns that number plus 1.
  
  Examples:
  
  addOne(1) //=> 2
  addOne(-5) //=> -4
  -----------------------------------------------------------------*/
// Your solution for 01-addOne here:

function addOne(num) {
  return num + 1
}

/*-----------------------------------------------------------------
  Challenge: 02-addTwoNumbers
  
  Difficulty: Basic  
  
  Prompt:
  
  Write a function called addTwoNumbers that accepts two numeric arguments and returns the sum of those two numbers.
  If either argument is not a Number, return the value of NaN.
  
  Examples:
  
  addTwoNumbers(5, 10) //=> 15
  addTwoNumbers(10, -2) //=> 8
  addTwoNumbers(0, 0) //=> 0
  addTwoNumbers('Hello', 5) //=> NaN
  -----------------------------------------------------------------*/
// Your solution for 02-addTwoNumbers here:

function addTwoNumbers(num1, num2) {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2
  } else {
    return NaN
  }
}

/*-----------------------------------------------------------------
  Challenge: 03-sumNumbers
  
  Difficulty: Basic  
  
  Prompt:
  
  - Write a function called sumNumbers that accepts a single array of numbers and returns the sum of the numbers in the array.
  - If the array is empty, return 0 (zero).
  
  Examples:
  
  sumNumbers([10]) //=> 10
  sumNumbers([5, 10]) //=> 15
  sumNumbers([2, 10, -5]) //=> 7
  sumNumbers([]) //=> 0
  -----------------------------------------------------------------*/
// Your solution for 03-sumNumbers here:

/*--- okay solution ---*/
function sumNumbers(nums) {
  var sum = 0
  for (var i = 0; i < nums.length; i++) {
    sum += nums[i]
  }
  return sum
}

/*--- better solution (use forEach unless you have to exit loop early) ---*/
// function sumNumbers(nums) {
//   var sum = 0;
//   nums.forEach(function(num) {
//     sum += num;
//   });
//   return sum;
// }

/*--- best solution (don't worry, this will make sense soon enough) ---*/
// function sumNumbers(nums) {
//   return nums.reduce((sum, num) => sum += num, 0);
// }

/*-----------------------------------------------------------------
  Challenge: 04-addList
  
  Difficulty: Basic
  
  Prompt:
  
  - Write a function called addList that accepts any quantity of numbers as arguments, adds them together and returns the resulting sum.
  - Assume all parameters will be numbers.
  - If called with no arguments, return 0 (zero).
  
  Examples:
  
  add(1) //=> 1
  add(1,50,1.23) //=> 52.23
  add(7,-12) //=> -5
  -----------------------------------------------------------------*/
// Your solution for 04-addList here:

/*--- using the arguments keyword (array-like object) and a for loop ---*/
function addList() {
  var sum = 0
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}

/*--- make arguments a true array then forEach ---*/
// function addList() {
//   var nums = Array.from(arguments);
//   var sum = 0;
//   nums.forEach(function(num) {
//     sum += num;
//   });
//   return sum;
// }

/*--- use rest paramater syntax (ES2015) then reduce ---*/
// function addList(...nums) {
//   // nums will be an array containing all arguments
//   return nums.reduce((sum, num) => sum + num, 0);
// }

/*-----------------------------------------------------------------
  Challenge: 05-computeRemainder
  
  Difficulty: Basic
  
  Prompt:
  
  - Write a function named computeRemainder that accepts two numeric arguments and returns the remainder of the division of those two numbers.
  - The first argument should be the dividend and the second argument should be the divisor.
  - If a 0 is passed in as the second argument you should return JavaScript's special numeric value: Infinity.
  - For extra fun, complete this challenge without using the modulus (%) operator.
  
  Examples:
  
  computeRemainder(10,2) //=> 0
  computeRemainder(4,0) //=> Infinity
  computeRemainder(10.5, 3) //=> 1.5
  -----------------------------------------------------------------*/
// Your solution for 05-computeRemainder:

/*--- Not using the modulus operator ---*/
function computeRemainder(n1, n2) {
  if (n2 === 0) return Infinity
  return n1 - Math.floor(n1 / n2) * n2
}

/*--- Using the modulus operator ---*/
// function computeRemainder(dividend, divisor) {
//   if (divisor === 0) return Infinity;
//   return dividend % divisor;
// }

/*-----------------------------------------------------------------
  Challenge: 06-range
  
  Difficulty: basic
  
  Prompt:
  
  - Write a function called range that accepts two integers as arguments and returns an array of integers starting with the first argument up to one less than the second argument.
  - The range function must be called with the first argument less than or equal to the second argument, otherwise return the string "First argument must be less than second".
  
  Examples:
  
  range(1,4) //=> [1,2,3]
  range(-2, 3) //=> [-2,-1,0,1,2]
  range(1,1) //=> []
  range(5,2) //=> "First argument must be less than second"
  -----------------------------------------------------------------*/
// Your solution for 06-range here:

function range(start, finish) {
  if (start > finish) return 'First argument must be less than second'

  var range = []
  for (var n = start; n < finish; n++) {
    range.push(n)
  }

  return range
}

/*-----------------------------------------------------------------
  Challenge: 07-reverseUpcaseString
  
  Difficulty: Basic
  
  Prompt:
  
  - Write a function called reverseUpcaseString that accepts a single string argument, then returns the string with its characters in reverse orderand converts all characters to uppercase.
  
  Examples:
  
  reverseUpcaseString("SEI Rocks!"); //=> "!SKCOR IES" 
  -----------------------------------------------------------------*/
// Your solution for 07-reverseUpcaseString here:

function reverseUpcaseString(str) {
  var results = ''
  for (var i = 0; i < str.length; i++) {
    // can use square brackets to access chars in a string
    // but using the charAt() method is preferred
    results = str.charAt(i).toUpperCase() + results
  }
  return results
}

// function reverseUpcaseString(str) {
//   // convert string to array, reverse, map and finally join it
//   return str.split('').reverse().map(function(char) {
//     return char.toUpperCase();
//   }).join('');
// }

// function reverseUpcaseString(str) {
//   // above version using an arrow function
//   return str.split('').reverse().map(c => c.toUpperCase()).join('');
// }

/*-----------------------------------------------------------------
  Challenge: 08-removeEnds
  
  Difficulty: Basic
  
  Prompt:
  
  - Write a function called removeEnds that accepts a single string argument, then returns the a string with the first and last characters removed.
  - If the length of the string argument is less than 3, return an empty string.
  
  Examples:
  
  removeEnds('SEI Rocks!'); //=> "DI Rocks"
  removeEnds('a'); //=> "" (empty string)
  -----------------------------------------------------------------*/
// Your solution for 08-removeEnds here:

/*--- Using for loop ---*/
function removeEnds(str) {
  if (str.length < 3) return ''
  var result = ''
  for (var i = 1; i < str.length - 1; i++) {
    result += str.charAt(i)
  }
  return result
}

/*--- Using substr String method ---*/
// function removeEnds(str) {
//   if (str.length < 3) return '';
//   return str.substr(1, str.length - 2);
// }

/*-----------------------------------------------------------------
  Challenge: 09-charCount
  
  Difficulty: Basic
  
  Prompt:
  
  - Write a function named charCount that accepts a single string argument and returns an object that represents the count of each character in the string.
  - The returned object should have keys that represent the character with its value set to the how many times the character appears in the string argument.
  - Upper and lower case characters should be counted separately.
  - Space characters should be count too.
  
  Examples:
  
  charCount('hello') //=> { h: 1, e: 1, l: 2, o: 1 }
  charCount('Today is fantastic!') //=> { T: 1, o: 1, d: 1, a: 3, y: 1, ' ': 2, i: 2, s: 2, f: 1, n: 1, t: 2, c: 1, '!': 1 }
  -----------------------------------------------------------------*/
// Your solution for 09-charCount here:

/*--- using a for loop ---*/
function charCount(str) {
  var result = {}
  for (var i = 0; i < str.length; i++) {
    var char = str.charAt(i)
    // already seen this char?
    if (result[char]) {
      result[char]++
    } else {
      result[char] = 1
    }
  }
  return result
}

/*--- convert str to array and use reduce with a ternary ---*/
// function charCount(str) {
//   return str.split('').reduce(function(countObj, char) {
//     countObj[char] = countObj[char] ? ++countObj[char] : 1;
//     return countObj;
//   }, {});
// }

/*-----------------------------------------------------------------
  Challenge: 10-formatWithPadding
  
  Difficulty: Basic
  
  Prompt:
  
  - Write a function called formatWithPadding that accepts three arguments:
    - A numeric argument (an integer) representing the number to format.
    - A string argument (a single character) representing the character used to "pad" the returned string to a minimum length.
    - Another numeric argument (an integer) representing the length to "pad" the returned string to.
  - The function should return the integer as a string, "left padded" to the length of the 3rd arg using the character provided in the 2nd arg.
  - If the length of the integer converted to a string is equal or greater than the 3rd argument, no padding is needed - just return the integer as a string.
  
  Examples:
  
  formatWithPadding(123, '0', 5); //=> "00123"
  formatWithPadding(42, '*', 10); //=> "********42"
  formatWithPadding(1234, '*', 3); //=> "1234"
  -----------------------------------------------------------------*/
// Your solution for 10-formatWithPadding here:

/*--- Using for while loop ---*/
function formatWithPadding(int, char, length) {
  var result = int.toFixed(0)
  while (result.length < length) {
    result = char + result
  }
  return result
}

/*--- Using the padStart String method ---*/
// function formatWithPadding(int, char, length) {
//   return int.toFixed(0).padStart(length, char);
// }

/*-----------------------------------------------------------------
  Challenge: 11-isPalindrome
  
  Difficulty: Intermediate
  
  Prompt:
  
  - Write a function called isPalindrome that accepts a single string argument, then returns true or false depending upon whether or not the string is a palindrome.
  - A palindrome is a word or phrase that are the same forward or backward.
  - Casing and spaces are not included when considering whether or not a string is a palindrome.
  - If the length of the string is 0 or 1, return true.
  
  Examples:
  
  isPalindrome('SEI Rocks'); //=> false
  isPalindrome('rotor'); //=> true
  isPalindrome('A nut for a jar of tuna'); //=> true
  isPalindrome(''); //=> true
  -----------------------------------------------------------------*/
// Your solution for 11-isPalindrome here:

/*--- Using a for loop ---*/
function isPalindrome(str) {
  str = str.toLowerCase()
  // loop to replace spaces
  while (str.includes(' ')) str = str.replace(' ', '')
  for (var i = 0; i < Math.floor(str.length / 2); i++) {
    if (str.charAt(i) !== str.charAt(str.length - i - 1)) return false
  }
  return true
}

/*--- Using regular expression to replace spaces ---*/
// function isPalindrome(str) {
//   // regular expression to replace all spaces
//   str = str.toLowerCase().replace(/ /g, '');
//   for (var i = 0; i < Math.floor(str.length / 2); i++) {
//     if (str.charAt(i) !== str.charAt(str.length - i - 1)) return false;
//   }
//   return true;
// }

/*-----------------------------------------------------------------
  Challenge: 12-hammingDistance
  
  Difficulty: Intermediate
  
  Prompt:
  
  In information theory, the hamming distance refers to the count of the differences between two strings of equal length.  It is used in computer science for such things as implementing "fuzzy search"  capability.
  
  - Write a function named hammingDistance that accepts two arguments which are both strings of equal length.
  - The function should return the count of the symbols (characters, numbers, etc.) at the same position within each string that are different.
  - If the strings are not of the same length, the function should return NaN.
  
  Examples:
  
  hammingDistance('abc', 'abc'); //=> 0
  hammingDistance('a1c', 'a2c'); //=> 1
  hammingDistance('!!!!', '****'); //=> 4
  hammingDistance('abc', 'ab'); //=> NaN
  -----------------------------------------------------------------*/
// Your solution for 12-hammingDistance here:

function hammingDistance(s1, s2) {
  if (s1.length !== s2.length) return NaN
  var count = 0
  for (var i = 0; i < s1.length; i++) {
    if (s1.charAt(i) !== s2.charAt(i)) count++
  }
  return count
}

/*--- convert one string to array and reduce ---*/
// function hammingDistance(s1, s2) {
//   if (s1.length !== s2.length) return NaN;
//   s1.split('').reduce(function(count, char, idx) {
//     return char !== s2.charAt(idx) ? count + 1 : count;
//   }, 0);
// }

/*-----------------------------------------------------------------
  Challenge: 13-mumble
  
  Difficulty: Intermediate
  
  Prompt:
  
  - Write a function called mumble that accepts a single string argument.
  - The function should return a string that has each character repeated the number of times according to its position within the string arg.  In addition, each repeated section of characters should be separated by a hyphen (-).
  - Examples describe it best..
  
  Examples:
  
  mumble('X'); //=> 'X'
  mumble('abc'); //=> 'a-bb-ccc'
  mumble('121'); //=> '1-22-111'
  mumble('!A 2'); //=> '!-AA-   -2222'
  -----------------------------------------------------------------*/
// Your solution for 13-mumble here:

function mumble(str) {
  var result = ''
  for (var i = 0; i < str.length; i++) {
    // the ((i || '') && '-') only adds a dash if it's not the first iteration
    result += ((i || '') && '-') + str.charAt(i).repeat(i + 1)
  }
  return result
}

/*--- convert to array and use reduce (break that one-liner down!) ---*/
// function mumble(str) {
//   return str.split('').reduce((result, c, i) => result + ((i || '') && '-') + c.repeat(i + 1), '');
// }

/*-----------------------------------------------------------------
  Challenge: 14-fromPairs
  
  Difficulty: Intermediate
  
  Prompt:
  
  - Write a function named fromPairs that creates an object from an array containing nested arrays.
  - Each nested array will have two elements representing key/value pairs used to create key/value pairs in an object to be returned by the function.
  - If a key appears in multiple pairs, the rightmost pair should overwrite previous the previous entry in the object.
  
  Examples:
  
  fromPairs([ ['a', 1], ['b', 2], ['c', 3] ]) //=> { a: 1, b: 2, c: 3 }
  fromPairs([ ['name', 'Sam"], ['age', 24], ['name', 'Sally'] ]) //=> { name: "Sally", age: 24 }
  -----------------------------------------------------------------*/
// Your solution for 14-fromPairs here:

/*--- using forEach ---*/
function fromPairs(arr) {
  var obj = {}
  arr.forEach(function (kvArr) {
    obj[kvArr[0]] = kvArr[1]
  })
  return obj
}

/*--- using reduce & arrow function ---*/
// function fromPairs(arr) {
//   return arr.reduce((obj, kvArr) => {
//       obj[kvArr[0]] = kvArr[1];
//       return obj;
//   }, {});
// }

/*-----------------------------------------------------------------
  Challenge: 15-mergeObjects
  
  Difficulty:  Intermediate
  
  Prompt:
  
  - Write a function named mergeObjects that accepts at least two objects as arguments, merges the properties of the second through n objects into the first object, then finally returns the first object.
  - If any objects have the same property key, values from the object(s) later in the arguments list should overwrite earlier values.
  
  Examples:
  
  mergeObjects({}, {a: 1});  //=> {a: 1} (same object as first arg)
  mergeObjects({a: 1, b: 2, c: 3}, {d: 4});  //=> {a: 1, b: 2, c: 3, d: 4}
  mergeObjects({a: 1, b: 2, c: 3}, {d: 4}, {b: 22, d: 44});  //=> {a: 1, b: 22, c: 3, d: 44}
  -----------------------------------------------------------------*/
// Your solution for 15-mergeObjects here:

/*--- Using ES2015's rest parameter syntax ---*/
function mergeObjects(target, ...objects) {
  objects.forEach(function (obj) {
    // using ES2015's 'for in' loop
    for (var key in obj) {
      target[key] = obj[key]
    }
  })
  return target
}

/*--- Using ES2015's Object.assign & spread operator ---*/
// function mergeObjects(target, ...objects) {
//   return Object.assign(target, ...objects);
// }

/*-----------------------------------------------------------------
  Challenge: 16-findHighestPriced
  
  Difficulty:  Intermediate  
  
  Prompt:
  
  - Write a function named findHighestPriced that accepts a single array of objects.
  - The objects contained in the array are guaranteed to have a price property holding a numeric value.
  - The function should return the object in the array that has the largest value held in the price property.
  - If there's a tie between two or more objects, return the first of those objects in the array.
  - Return the original object, not a copy.
  
  Examples:
  
  findHighestPriced([
    { sku: 'a1', price: 25 },
    { sku: 'b2', price: 5 },
    { sku: 'c3', price: 50 },
    { sku: 'd4', price: 10 }
  ]);
  //=> { sku: 'c3', price: 50 } 
  
  findHighestPriced([
    { sku: 'a1', price: 25 },
    { sku: 'b2', price: 50 },
    { sku: 'c3', price: 50 },
    { sku: 'd4', price: 10 }
  ]);
  //=> { sku: 'b2', price: 50 }
  -----------------------------------------------------------------*/
// Your solution for 16-findHighestPriced here:

function findHighestPriced(arr) {
  var highestPrice = 0
  var resultObj
  arr.forEach(function (item) {
    if (item.price > highestPrice) {
      highestPrice = item.price
      resultObj = item
    }
  })
  return resultObj
}

/*--- using the reduce Array method ---*/
// function findHighestPriced(arr) {
//   return arr.reduce((highest, item) => item.price > highest.price ? item : highest);
// }

/*-----------------------------------------------------------------
  Challenge: 17-mapArray
  
  Difficulty:  Intermediate
  
  Prompt:
  
  The goal is of this challenge is to write a function that performs the functionality of JavaScript's Array.prototype.map method.
  
  - Write a function named mapArray that accepts two arguments: a single array and a callback function.
  - The mapArray function should return a new array of the same length as the array argument.
  - The mapArray function should iterate over each element in the array (first arg).  For each iteration, invoke the callback function (2nd arg), passing to it as arguments, the current element and its index.  Whatever is returned by the callback function should be included in the new array at the index of the current iteration.
  
  Examples:
  
  mapArray( [1, 2, 3], function(n) {
    return n * 2;
  } );
  //=> [2, 4, 6]  (a new array)
  
  mapArray( ['rose', 'tulip', 'daisy'], function(f, i) {
    return `${i + 1} - ${f}`;
  } );
  //=> ["1 - rose", "2 - tulip", "3 - daisy"]
  -----------------------------------------------------------------*/
// Your solution for 17-mapArray here:

function mapArray(arr, cb) {
  var newArr = []
  arr.forEach(function (el, idx) {
    newArr.push(cb(el, idx))
  })
  return newArr
}

/*-----------------------------------------------------------------
  Challenge: 18-reduceArray
  
  Difficulty:  Intermediate
  
  Prompt:
  
  The goal is of this challenge is to write a function that performs the functionality of JavaScript's Array.prototype.reduce method.
  
  - Write a function named reduceArray that accepts three arguments: (1) an array; (2) a callback function; and (3) a value used as the initial value of the "accumulator".
  - The reduceArray function should return whatever is returned by the callback function on the last iteration.
  - The reduceArray function should iterate over each element in the array (first arg).  For each iteration, invoke the callback function (2nd arg), passing to it three arguments: (1) the "accumulator", which is the value returned by the callback during the previous iteration; (2) the  current element; and (3) the index of the current iteration.
  - On the first iteration, provide the third argument provided to reduceArray as the first argument when invoking the callback, then for subsequent iterations, provide the value returned by the callback during the previous iteration.
  
  Examples:
  
  reduceArray( [1, 2, 3], function(acc, n) {
    return acc + n;
  }, 0);
  //=> 6
  
  reduceArray( [1, 2, 3], function(acc, n, i) {
    return acc + n + i;
  }, 0);
  //=> 9
  
  reduceArray( ['Yes', 'No', 'Yes', 'Maybe'], function(acc, v) {
    acc[v] = acc[v] ? acc[v] + 1 : 1;
    return acc;
  }, {} );
  //=> {"Yes": 2, "No": 1, "Maybe": 1}
  -----------------------------------------------------------------*/
// Your solution for 18-reduceArray here:

function reduceArray(arr, cb, initAcc) {
  var acc = initAcc
  arr.forEach(function (el, idx) {
    acc = cb(acc, el, idx)
  })
  return acc
}

/*-----------------------------------------------------------------
  Challenge: 19-flatten
  
  Difficulty:  Intermediate
  
  Prompt:
  
  - Write a function named flatten that accepts a single array that may contain nested arrays and returns a new "flattened" array.
  - A flattened array is an array that contains no nested arrays.
  - Arrays maybe nested at any level.
  - If any of the arrays have duplicate values those duplicate values should be present in the returned array.
  - The values in the new array should maintain their ordering as shown in the examples below.
  
  Hint:
  
  - This assignment provides an excellent opportunity to use recursion (a function that calls itself).  It can also be solved by using an inner function.
  
  Examples:
  
  flatten( [1, [2, 3]] );
  //=> [1, 2, 3]  (a new array) 
  
  flatten( [1, [2, [3, [4]]], 1, 'a', ['b', 'c']] );
  //=> [1, 2, 3, 4, 1, 'a', 'b', 'c']
  -----------------------------------------------------------------*/
// Your solution for 19-flatten here:

/*--- Using recursion ---*/
function flatten(arr) {
  var flatArr = []
  arr.forEach(function (elem) {
    // use the Array.isArray static method to test if an array
    if (Array.isArray(elem)) {
      flatArr = flatArr.concat(flatten(elem))
    } else {
      flatArr.push(elem)
    }
  })
  return flatArr
}

/*--- Using recursion and inline ternary for conciseness ---*/
// function flatten(arr) {
//   var flatArr = [];
//   arr.forEach(function(elem) {
//     flatArr = flatArr.concat(Array.isArray(elem) ? flatten(elem): elem);
//   });
//   return flatArr;
// }

/*--- Use reduce and  recursion for a one-liner ---*/
// function flatten(arr) {
//   return arr.reduce((flatArr, elem) => flatArr.concat(Array.isArray(elem) ? flatten(elem): elem), []);
// }

/*-----------------------------------------------------------------
  Challenge: 20-isPrime
  
  Difficulty: Intermediate
  
  Prompt:
  
  - Write a function named isPrime that returns true when the integer argument passed to it is a prime number and false when the argument passed to it is not prime.
  - A prime number is a whole number (integer) greater than 1 that is evenly divisible by only itself.
  
  Examples:
  
  isPrime(2) //=> true
  isPrime(3) //=> true 
  isPrime(4) //=> false
  isPrime(29) //=> true
  isPrime(200) //=> false
  -----------------------------------------------------------------*/
// Your solution for 20-isPrime here:

function isPrime(n) {
  if (n < 2 || !Number.isInteger(n)) return false
  for (var i = 2; i <= n / 2; i++) {
    if (Number.isInteger(n / i)) return false
  }
  return true
}

/*-----------------------------------------------------------------
  Challenge: 21-primeFactors
  
  Difficulty: Intermediate
  
  Prompt:
  
  Now that you have solved the last challenge of determining if a whole number is prime, let's expand upon that concept to...
  - Write a function named primeFactors that accepts a whole number greater than one (1) as an argument and returns an array of that argument's prime factors.
  - The prime factors of a whole number are the prime numbers that, when multiplied together, equals the whole number.
  - If the argument provided is not greater than 1, or not a whole number, then primeFactors should return an empty array.
  
  Examples:
  
  primeFactors(2) //=> [2]
  primeFactors(3) //=> [3]
  primeFactors(4) //=> [2, 2]
  primeFactors(18) //=> [2, 3, 3]
  primeFactors(29) //=> [29]
  primeFactors(105) //=> [3, 5, 7]
  primeFactors(200) //=> [2, 2, 2, 5, 5]
  -----------------------------------------------------------------*/
// Your solution for 21-primeFactors here:

/*--- most logical approach ---*/
function primeFactors(n) {
  var factors = []
  if (n < 2 || !Number.isInteger(n)) return factors

  // function to help find next prime to divide by...
  function isPrime(n) {
    if (n < 2 || !Number.isInteger(n)) return false
    for (var i = 2; i <= n / 2; i++) {
      if (Number.isInteger(n / i)) return false
    }
    return true
  }

  var prime = 2 // start with smallest prime
  while (!isPrime(n)) {
    if (Number.isInteger(n / prime)) {
      factors.push(prime)
      n = n / prime
    } else {
      // find next prime
      prime++
      while (!isPrime(prime)) prime++
    }
  }
  factors.push(n)
  return factors
}

/*-- a more efficient algorithm that relies on the fact
       that you don't have to check if the divisor is prime 
       as shown here:
       https://people.revoledu.com/kardi/tutorial/BasicMath/Prime/Algorithm-PrimeFactor.html ---*/
// function primeFactors(n) {
//   var factors = [];
//   if (n < 2 || !Number.isInteger(n)) return factors;
//   var divisor = 2;
//   while (n >= divisor * divisor) {
//     if (Number.isInteger(n / divisor)) {
//       factors.push(divisor);
//       n = n / divisor;
//     } else {
//       divisor++;
//     }
//   }
//   factors.push(n);
//   return factors;
// }

/*-----------------------------------------------------------------
  Challenge: 22-intersection
  
  Difficulty: Intermediate
  
  Prompt:
  
  - Write a function named intersection that accepts two arguments which are both arrays.  The array arguments may contain any mixture of strings, numbers and/or booleans - but no reference types, i.e., objects.
  - The function should return a new array containing all elements in common, including repeating element values.
  - The ordering of the elements in the returned is not important.
  - If there are no elements in the arrays in common,  the intersection function should return an empty array.
  - The function should not mutate (change) either argument.
  
  Examples:
  
  intersection(['a', 1], []) //=> []
  intersection(['a', 1], [true, 'a', 15]) //=> ['a']
  intersection([1, 'a', true, 1, 1], [true, 1, 'b', 1]) //=> [1, true, 1]
  -----------------------------------------------------------------*/
// Your solution for 22-intersection here:

function intersection(a1, a2) {
  var result = []
  // create copy of 2nd array for purpose of handling dups
  var _a2 = [...a2]
  a1.forEach((val) => {
    var idx = _a2.indexOf(val)
    if (idx > -1) result.push(_a2.splice(idx, 1)[0])
  })
  return result
}

/*-----------------------------------------------------------------
  Challenge: 23-balancedBrackets
  
  Difficulty:  Intermediate
  
  Prompt:
  
  - Write a function called balancedBrackets that accepts a single string as argument.
  - The input string is composed entirely of parentheses, brackets and/or curly braces, i.e.,  (), [] and/or {}. Referred to as "braces" from this point forward...
  - The balancedBraces function should return true if the string's braces are "balanced" and false if they are not.
  - The brackets are considered unbalanced if any closing bracket does not close the same type of opening bracket, ignoring already matched brackets between them.  Examples explain it best...
  
  Examples:
  
  balancedBrackets( '()' ) // => true
  balancedBrackets( '(]' ) // => false
  balancedBrackets( '[{}]' ) // => true
  balancedBrackets( '[(])' ) // => false
  balancedBrackets( '[({}[])]' ) // => true
  -----------------------------------------------------------------*/
// Your solution for 23-balancedBrackets here:

/*
    The solution for this challenge is best implemented using
    a data structure known as a 'stack'. Think of a stack working a lot
    like a stack of papers where you always place new papers on top
    and always remove the top paper.
  */

function balancedBrackets(str) {
  // can't be balanced if string odd in length
  if (str.length % 2) return false
  var stack = []
  for (var i = 0; i < str.length; i++) {
    var b = str.charAt(i)
    if ('([{'.includes(b)) {
      // add opening brackets to the stack
      stack.push(b)
    } else {
      // not an opening bracket, so remove last opening and check if matched
      if (!'() {} []'.includes(stack.pop() + b)) return false
    }
  }
  return true
}

/*--- Using Array.every method to iterate unless false is returned
        Also using arrow function ---*/
// function balancedBrackets(str) {
//   var stack = [];
//   return str.split('').every(c => {
//     if ('([{'.includes(c)) {
//       return stack.push(c);
//     } else {
//       return '() {} []'.includes(stack.pop() + c)
//     }
//   });
// }

/*--- Holy ternary Batman! Almost a one-liner! ---*/
// function balancedBrackets(str) {
//   var a = [];
//   return str.split('').every(c => '([{'.includes(c) ? a.push(c) : '() {} []'.includes(a.pop() + c));
// }

/*-----------------------------------------------------------------
  Challenge: 24-isWinningTicket
  
  Difficulty:  Intermediate
  
  Prompt:
  
  - Write a function called isWinningTicket that accepts a single array an as argument.
  - The input array represents a 'lottery ticket' consisting of one or more nested 2-value arrays.  The first value of a nested array will be a string, the second an integer.
  - The isWinningTicket function should return true if all of the nested arrays have a character in the string whose numeric character code equals the integer (2nd value).
  - If any of the nested arrays have a string where all of the character's character code does not match the integer, then return false.
  
  Hints:
  
  - A character/string can be created from a character code using the String.fromCharCode() class method.
  - A character within a string's character code can be obtained using the charCodeAt() string method.
  
  Examples:
  
  isWinningTicket( [ ['ABC', 65] ] ) // => true
  isWinningTicket( [ ['ABC', 999], ['XY', 89] ] ) // => false
  isWinningTicket( [ ['ABC', 66], ['dddd', 100], ['Hello', 108] ] ) // => true
  isWinningTicket( [ ['ABC', 66], ['dddd', 15], ['Hello', 108] ] ) // => false
  -----------------------------------------------------------------*/
// Your solution for 24-isWinningTicket here:

/* Naive for loops - :( */
function isWinningTicket(ticket) {
  var winner = true
  for (var i = 0; i < ticket.length; i++) {
    var charFromNumber = String.fromCharCode(ticket[i][1])
    if (!ticket[i][0].includes(charFromNumber)) {
      winner = false
      break
    }
  }
  return winner
}

/* Array.prototype.every is sweet */
// function isWinningTicket(ticket){
//   return ticket.every(function(arr) {
//     return arr[0].includes(String.fromCharCode(arr[1]));
//   });
// }

/* Arrow functions help make concise one-liners possible */
// function isWinningTicket(ticket){
//   return ticket.every(arr => arr[0].includes(String.fromCharCode(arr[1])));
// }

/*-----------------------------------------------------------------
  Challenge: 25-getNumForIP
  
  Difficulty:  Intermediate
  
  Prompt:
  
  - Write a function called getNumForIP that accepts a single string as argument.
  - The input string is formatted as an IP address, such as '192.156.99.15'.  IP addresses are used in networking and are actually 32-bit integers.  However, those that work with networks find it more convenient to work with these numbers as four 8-bit integers, separated by a 'dot' character.
  - The getNumForIP function should return the numeric value of the string IP address being passed in as an argument.
  
  Hints:
  
  - Each 8-bit number can hold a value between 0 and 256.
  - An IP's right most 8-bit number represents how many of 256 raised to the power of 0 (equals 1) there are.  The next 8-bit number represents how many of 256 raised to the power of 1 (256) there are, etc.  For example, if you took the right-most two 8-bit numbers of the IP address 192.156.99.15, you would have 15 * (256 ** 0), which equals 15, and 99 * (256**1), which equals 25344.
  - To compute the numeric value for an IP address, you first compute the value for each of the four 8-bit chunks (as described in the above hint), and add them together!
  
  Examples:
  
  getNumForIP( '0.0.0.1' ) // => 1
  getNumForIP( '0.0.2.0' ) // => 512
  getNumForIP( '192.156.99.15' ) // => 3231474447
  getNumForIP( '10.0.0.1' ) // => 167772161
  -----------------------------------------------------------------*/
// Your solution for 25-getNumForIP here:

function getNumForIP(ip) {
  // reverse the chunks so that the we can use the index like 256**idx
  var chunks = ip.split('.').reverse()
  var sum = 0
  chunks.forEach(function (chunk, idx) {
    sum += parseInt(chunk) * 256 ** idx
  })
  return sum
}

/* Using reduce method gives us a one-liner */
// function getNumForIP(ip) {
//   return ip.split('.').reverse().reduce((sum, chunk, idx) => sum + parseInt(chunk) * 256**idx, 0);
// }

/*-----------------------------------------------------------------
  Challenge: 26-toCamelCase
  
  Difficulty:  Intermediate
  
  Prompt:
  
  - Write a function called toCamelCase that accepts a single string as argument.
  - The toCamelCase function should return the string as camel-cased, removing each _ or - characters and capitalizing the character following the _ or -.
  
  Hints:
  
  - This is a great challenge for using regular expressions combined with the String.replace method.
  
  Examples:
  
  toCamelCase( 'wdi-rocks' ) // => 'wdiRocks'
  toCamelCase( 'banana_Turkey_potato' ) // => 'bananaTurkeyPotato'
  toCamelCase( 'Mama-mia' ) // => 'MamaMia'
  toCamelCase( 'A_b_c' ) // => 'ABC'
  -----------------------------------------------------------------*/
// Your solution for 26-toCamelCase here:

function toCamelCase(str) {
  return str.replace(/[_-]\w/g, function (match) {
    return match.charAt(1).toUpperCase()
  })
}

/* Take advantage of the implicit return of an arrow function for a one-line solution */
// function toCamelCase(str) {
//   return str.replace(/[_-]\w/g, match => match.charAt(1).toUpperCase());
// }

/*-----------------------------------------------------------------
  Challenge: 27-countTheBits
  
  Difficulty:  Intermediate
  
  Prompt:
  
  - Write a function called countTheBits that accepts a single numeric argument that will be an integer.
  - The function should return the number of bits that are set to 1 in the number's binary representation.
  
  Hints:
  
  - We typically work with "decimal" numbers on a daily basis. Decimal is "base 10", where there are 10 digits available - 0 thru 9.  However, it's binary that computers understand - 1's and 0's.  The 1's and 0's are called bits.
  - As an example, the decimal value of 13 is represented in binary as 1101.  There are 3 one bits and 1 zero bit in the decimal number of 13.
  - Carefully read the documentation for the Number.prototype.toString method.
  
  Examples:
  
  countTheBits( 0 ) // => 0
  countTheBits( 13 ) // => 3
  countTheBits( 256 ) // => 1
  countTheBits( 255 ) //=> 8
  countTheBits( 65535 )  //=> 16
  -----------------------------------------------------------------*/
// Your solution for 27-countTheBits here:

function countTheBits(int) {
  return int
    .toString(2)
    .split('')
    .filter((bit) => bit === '1').length
}

/* Using a regular expression. Note || operator to provide an array so that can use length if there are no matches */
// function countTheBits(int) {
//   return (int.toString(2).match(/1/g) || []).length;
// }

/*-----------------------------------------------------------------
  Challenge: 28-gridTrip
  
  Difficulty:  Intermediate
  
  Prompt:
  
  - This challenge uses an imaginary grid where the x coordinate increases when you move 'up' and decreases when you move 'down'.  Similarly, the y coordinate increases when you move 'right' and decreases when you move 'left'.
  - Write a function called gridTrip that accepts two arguments.
  - The first argument is an array containing two integers.  The first represents the starting x position on the grid.  The second integer in the array represents the starting y position.
  - The second argument is a string representing "moves" using the characters 'U', 'D', 'R' & 'L' to represent moving Up, Down, Right & Left respectively.  Each direction character will be followed by digits representing how many units to move in that direction.  For example, a string of 'D15R2U4' represents moving up 15 units, to the right 2 units, and finally, down 4 units.  The direction characters will always be upper case.
  - The gridTrip function should return a new array of two integers: the final x position and the final y position.  Do not modify the array argument).
  
  Hint:
  - Using the String.match method to return an array of regular expression matches can be helpful if you want to break the single string of moves into an array of distinct moves by direction.  Be sure to use the global flag, e.g. /cat/g, when defining the regexp.
  
  Examples:
  
  gridTrip( [0, 0], 'U2R1' ) // => [2, 1]
  gridTrip( [5, 10], 'D5L15U2' ) //-> [2, -5]
  gridTrip( [-22, 100], 'L2L15D50U1D9') //=> [-80, 83]
  -----------------------------------------------------------------*/
// Your solution for 28-gridTrip here:

/*--- Process one character at a time ---*/
function gridTrip(xyArr, moves) {
  // create result array with starting positions
  var result = [xyArr[0], xyArr[1]]
  // lookup object for result arr index and multipler for each dir char
  const lookup = { U: [0, 1], R: [1, 1], D: [0, -1], L: [1, -1] }
  var idx = 0
  while (idx < moves.length) {
    // first char of the move string is the direction to be used to access the lookup object
    var dir = moves[idx]
    idx++
    var numString = ''
    while ('0123456789'.includes(moves[idx]) && idx < moves.length) {
      numString += moves[idx]
      idx++
    }
    result[lookup[dir][0]] += numString * lookup[dir][1]
  }
  return result
}

/*--- Using regular expressions to break up the moves into an array ---*/
// function gridTrip(xyArr, moves) {
//   var result = [xyArr[0], xyArr[1]];
//   const lookup = {'U': [0, 1], 'R': [1, 1], 'D': [0, -1], 'L': [1, -1]};
//   // regular expressions are fantastic - be sure to use the 'global' flag with the match method
//   moves = moves.match(/[UDLR]\d+/g);
//   moves.forEach(function(move) {
//     var dir = move.charAt(0);
//     result[lookup[dir][0]] += move.substr(1) * lookup[dir][1];
//   });
//   return result;
// }

/*-----------------------------------------------------------------
  Challenge: 29-addChecker
  
  Difficulty:  Intermediate
  
  Prompt:
  
  - Write a function called addChecker that accepts two arguments.
  - The first argument is an array containing at least two integers.  The integers in the array are sorted in ascending order.
  - The second argument is an integer.
  - The addChecker function should return true if there are two integers in the array of integers (first argument) that when added together, equals the integer passed in as the second argument.
  - If there are no two integers in the array that sum up to equal the second argument, addChecker should return false.
  
  Hint:
  
  - An efficient solution can leverage the the fact that the integers in the array are sorted.
  
  Examples:
  
  addChecker( [1, 2], 3 ) // => true
  addChecker( [-3, 2], 9 ) // => false
  addChecker( [10, 15, 16, 22], 32 ) // => true
  addChecker( [10, 15, 16, 22], 19 ) // => false
  -----------------------------------------------------------------*/
// Your solution for 29-addChecker here:

/* inefficent solution - does not leverage sorted array */
function addChecker(nums, total) {
  var result = false
  for (i = 0; i < nums.length - 1; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === total) return true
    }
  }
  return result
}

/* efficent solution - leveraging the sorted array */
// function addChecker(nums, total) {
//   var result = false;
//   var start = 0
//   var end = nums.length - 1;
//   while (start < end) {
//     var sum = nums[start] + nums[end];
//     if (sum === total) return true;
//     sum < total ? start++ : end--;
//   }
//   return result;
// }

/*-----------------------------------------------------------------
  Challenge: 30-totalTaskTime
  
  Difficulty:  Difficult
  
  Prompt:
  
  - Write a function called totalTaskTime that accepts two arguments.
  - The first argument is an array of integers referred to as a "queue".  Each integer in the queue represents a "task", more specifically, the amount of time to complete that task.
  - The second argument is an integer representing the number of CPU "threads" available to process all of the tasks in the queue.
  - The totalTaskTime function should return an integer representing the total time it is going to take to complete all of the tasks in the queue.
  - You may mutate the "queue" array (first argument) if you wish.
  
  Hint:
  
  - Solve it with paper and pencil first.  Look for patterns and generalize.  Pseudocode!
  
  Examples:
  
  totalTaskTime( [], 1 ) // => 0
  totalTaskTime( [4, 2, 5], 1 ) // => 11
  totalTaskTime( [5, 8], 2 ) // => 8
  totalTaskTime( [4, 2, 10], 2 ) // => 12
  totalTaskTime( [2, 2, 3, 3, 4, 4], 2 ) //=> 9
  totalTaskTime( [5, 2, 6, 8, 7, 2], 3 ) // => 12
  -----------------------------------------------------------------*/
// Your solution for 30- here:

function totalTaskTime(tasks, numThreads) {
  var time = 0,
    shortest,
    threads
  while (tasks.length > numThreads) {
    // extract a task for each thread
    threads = tasks.splice(0, numThreads)
    // Find out the time for the task that will finish first.
    // Using the spread operator to provide Math.min with a list of values
    shortest = Math.min(...threads)
    // Add the time for that shortest task
    time += shortest
    // Reduce each task in threads by the shortest task time and
    // remove all of those completed "short" tasks
    threads = threads.map((t) => t - shortest).filter((t) => t)
    // Put any remaining tasks back into threads and do it again (loop)...
    tasks = threads.concat(tasks)
  }
  // When num remaining tasks is less or equal to numThreads,
  // we just need to add the time from the longest remaining task.
  // The ternary protects against Math.max returning infinity on an empty array
  return time + (tasks.length ? Math.max(...tasks) : 0)
}

/* One-liner using different 'addition' approach */
// function totalTaskTime(tasks, numThreads) {
//   return tasks.length && Math.max(...tasks.reduce((b, t, i) => (b[b.indexOf(Math.min(...b))] += t) && b, tasks.splice(0, numThreads)));
// }

module.exports = {
  sayHello,
  addOne,
  addTwoNumbers,
  sumNumbers,
  addList,
  computeRemainder,
  range,
  reverseUpcaseString,
  removeEnds,
  charCount,
  formatWithPadding,
  isPalindrome,
  hammingDistance,
  mumble,
  fromPairs,
  mergeObjects,
  findHighestPriced,
  mapArray,
  reduceArray,
  flatten,
  isPrime,
  primeFactors,
  intersection,
  balancedBrackets,
  isWinningTicket,
  getNumForIP,
  toCamelCase,
  countTheBits,
  gridTrip,
  addChecker,
  totalTaskTime
}
