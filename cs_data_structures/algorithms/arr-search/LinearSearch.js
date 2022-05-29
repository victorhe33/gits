const sortedArray = [1,2,3,4,5,6,7,8,9,10,17,18,19,20,21,22,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,50,51,56,57,58,59,60,61,62,63,64,65,2,73,74,75,76,77,78,79,80,81,82,83,84,91,97,98,99,100, 231, 3241, 4235324, 4642567537]


// BIG-O: O(n)
function linearSearch(arr, element) {
  // Take array and element we're searching for as arguments
  let found = false;
  // Set a boolean to track whether or not we've found the element
  let position = -1;
  // Position starts at -1, if we don't find the element, the return will be -1
  let index = 0;
  // starting index is 0

  while(!found && index < arr.length) {
  // While we haven't the element yet and the index is less then the entire array length
      if(arr[index] == element) {
        // If it's a match
          found = true;
          // set found to true, which will exit the while loop
          position = index;
          // set position to the index of the match
          break;
      } else {
          index += 1;
          // Otherwise, we'll keep moving up to check the next index
      }
  }
  return position;
  // return the position
}

// console.log(linearSearch(sortedArray, 74))