const binarySearch = (list, target) => {
  // Track low & high to know where we are
  let low = 0;
  let high = list.length - 1;

  // While we haven't found the target
  while(low <= high) {
    console.log("Get mid value");
    let mid = (low + high) / 2;
    console.log("Mid is: " + mid);
    let guess = list[mid];
    console.log("Set guess to: " + guess);
    if (guess === target) {
      return console.log("Target found at index: " + mid);
    };
    if (guess > target) {
      console.log("Search left half");
      return high = mid - 1;
    } else {
      console.log("Search right half");
      return low = mid + 1;
    }
    return  "null";
  }
}

numberList = [1, 3, 5, 7, 9];
console.log(binarySearch(numberList, 1));