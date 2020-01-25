  function findClosestValueInBst(tree, target) {
    return findClosestValueInBstHelper(tree, target, Infinity);
  }

  function findClosestValueInBstHelper(tree, target, closest) {
    if (tree === null) {
      return closest;
    } // If we've reached a leaf node, meaning no more values left to search
    if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
      closest = tree.value;
    };
    if (target < tree.value) {
      return findClosestValueInBstHelper(tree.left, target, closest); // Go down left side of tree
    } else if (target > tree.value) {
      return findClosestValueInBstHelper(tree.right, target, closest); // Go down right side of tree
    } else {
      return closest;
    }
  }

