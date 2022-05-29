// BIG-O: O(log(n))

function binarySearch(arr, element) {
  let start = 0;    
  // left endpoint, start of the split array
  let end = arr.length - 1;   
  //right endpoint, end of whichever array we're working with
  let position = -1;
  // Start with a position of -1 in case we don't find the element
  let found = false;
  // Set a boolean for whether or not we've found the element
  let middle;
  // Set a midpoint variable, no value yet

  while (found === false && start <= end) {
    // If we haven't found it and the start is less than or equal to the end, continue the while loop
      middle = Math.floor((start + end)/2);
      // Set the midpoint in the array
      if (arr[middle] == element) {
        // If the element at the midpoint is a match
          found = true;
          // We've found it, exit the while loop
          position = middle;
          // position is now the current midpoint
          break;
      } else if (arr[middle] > element) {  //if in lower half
        // shrink the array to the midpoints
          end = middle - 1;
      } else {  //in in upper half
          start = middle + 1;
      }
  }
  return position;
  // return the position
}

// console.log("Binary Search: ", binarySearch(sortedArray, 83))



function recursiveBinarySearch(arr, target, min, max) {
  // Takes in arguments for the array we're searching, the target element, min, and max
	let targetArray = arr.slice();
  // We'll use this target array as a copy of the original array, since we want to preserve the original array and its indices
	if (min === undefined) min = 0;
  // If a min value hasn't been passed in, we'll set to 0
	if (max === undefined) max = arr.length - 1;
  // If a max hasn't been passed in, we'll set it to the last item in the array

	let guess = Math.floor(((max - min) / 2) + min);
  // Make a guess to find the midpoint

	if (max <= min && targetArray[guess] !== target) return -1;
  // BASE CASE
  // First condition, if the max is less than or equal to the min, we know the array only has at most one element
  // So if the guess (midpoint) ISN'T equal to the target, we'll return null or -1
	else if (targetArray[guess] === target) return guess;
  // BASE CASE
  // If the guess is a match, we'll return the guess (midpoint) which will the index

  // RECURSIVE CASES
	else if (targetArray[guess] < target) return binarySearch(targetArray, target, guess + 1, max);
  // If the the value at the guess is less than the target, return the binary search of the right side of the array, by replacing the min with the guess + 1 
	else return binarySearch(targetArray, target, min, guess - 1);
  // Otherwise, we know that it has to be in the left side of the array, so we'll do a binary search there
};

// console.log(rBinarySearch(sortedArray, 83))
