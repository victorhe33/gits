const nums = [12,3,231,123,321,123,321,321,41,12,123,2243,1124,1231,3112,1331,1213,1311,1213,1312]
const otherNums = [23,345,2346,568,78569,568,2354,654]


const mySet = new Set(nums)
// constructor method
const newSet = new Set() 


// add(value)
// // Appends value to the Set object. Returns the Set object with added value.
// clear()
// // Removes all elements from the Set object.
// delete(value)
// // Removes the element associated to the value and returns a boolean asserting whether an element was successfully removed or not. has(value) will return false afterwards.
// has(value)
// // Returns a boolean asserting whether an element is present with the given value in the Set object or not.
// values()
// // Returns a new iterator object that yields the values for each element in the Set object in insertion order. (For Sets, this is the same as the keys() method.)
// size()
// // get the number of items in the set
console.log(mySet)

// mySet.add(4356)
// mySet.delete(3)

// console.log(mySet)

// console.log(mySet.has(41))

// console.log(mySet.size)