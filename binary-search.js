let listOfNumbers = [1, 3, 55, 27, 12, 12];

const binarySearch = (list, target) => {
  // Track low & high to know where we are
  let high = list.length - 1;
  let low = 0;
  let mid = 0;
  
  // While we haven't found the target
  while(low <= high) {
    mid = Math.floor((low + high) / 2);
    console.log("Mid is: " + mid);

    let guess = list[mid];
    console.log("Set guess to: " + guess);
    if (guess == target) {
      return console.log(`Target of ${mid} found`);
    } else if (target > guess) {
      console.log(`Search left half`);
      low = mid + 1;
    } 
    else {
      console.log(`Search right half`);
      high = mid - 1;
    }
  }
  return -1;
}

// Sort the array
let sorted = listOfNumbers.sort(function(a,b) {
  return a-b;
});

// Test the binary search algorithm
binarySearch(sorted, 12);