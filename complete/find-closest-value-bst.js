const root = [4, 2, 5, 1, 3];
const target = 3.714286;

function findClosestValueInBst(root, target) {
  return findClosestValueInBstHelper(root, target, Infinity);
}

function findClosestValueInBstHelper(root, target, closest) {
  if (root === null) {
    return closest;
  } // If we've reached a leaf node, meaning no more values left to search
  if (Math.abs(target - closest) > Math.abs(target - root.value)) {
    closest = root.value;
  };
  if (target < root.value) {
    return findClosestValueInBstHelper(root.left, target, closest); // Go down left side of root
  } else if (target > root.value) {
    return findClosestValueInBstHelper(root.right, target, closest); // Go down right side of root
  } else {
    console.log('closest');
    return closest;
  }
}