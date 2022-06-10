const containsDuplicate = (nums) => {
  const numberSet = new Set();

  for (const number of nums) {
    if (numberSet.has(number)) {
      console.log(`Number already exists: ${number}`);
      return true;
    }
    console.log(`Adding number: ${number}`);
    numberSet.add(number);
  }

  return false;
};

const nums = [1, 5, 2, 3, 1];
containsDuplicate(nums);
