class BST {
  value;
  left;
  right;

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const getClosestBoundary = (n, l, r) => {
	const l_n_Delta = Math.abs(l - n)
	const r_n_Delta = Math.abs(r - n)
	
	return l_n_Delta < r_n_Delta 
		? l 
		: r
}

// O(nlogn) time | O(nlogn) space - nlogn in space due to the framestack caused by recursion
export function findClosestValueInBst(tree, target) {
  if ((target > tree.value) && tree.right) {
		return getClosestBoundary(target, tree.value, findClosestValueInBst(tree.right, target))
	} else if ((target < tree.value) && tree.left) {		
		return getClosestBoundary(target, findClosestValueInBst(tree.left, target), tree.value)	
	} else {
		return tree.value
	}
}