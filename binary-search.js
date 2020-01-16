let arrayToSearch = [1, 3, 55, 27, 12, 12];

// Sort the array
/* Look at MDN array.protoype.sort to see the sort
implementation. This allows you to compare numbers 
and sort the array in ascending order */
let sortedArray = arrayToSearch.sort(function (a, b) {
  return a - b;
});

console.log(`Sorted array is: ${sortedArray}`);

const binarySearch = (arrayOfNumbers, target) => {
  // Track low index & high index to know where we are
  let highIndex = arrayOfNumbers.length - 1;
  let lowIndex = 0;
  let middleIndex = 0;
  
  // While we haven't found the target
  while(lowIndex <= highIndex) {
    middleIndex = Math.floor((lowIndex + highIndex) / 2);
    console.log("middleIndex is now: " + middleIndex);

    let guess = arrayOfNumbers[middleIndex];
    console.log("Setting guess to: " + guess);
    if (guess == target) {
      return console.log(`Target found at index ${middleIndex} with the value ${target}`);
    } else if (target > guess) {
      console.log(`Searching left half`);
      lowIndex = middleIndex + 1;
    } 
    else {
      console.log(`Searching right half`);
      highIndex = middleIndex - 1;
    }
  }
  return console.log(`${target} was not found in the array`);
}

// Take assorted array and apply our binarySearch algorithm
// binarySearch(sortedArray, 12);
binarySearch(sortedArray, 200);