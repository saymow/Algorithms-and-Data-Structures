// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  value;
  left;
  right;

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(n) time | O(n) space 
export function branchSums(root, sum = 0, list = []) {
  if (!root.left && !root.right) {
		list.push(sum + root.value)
	}
	
	if (root.left) branchSums(root.left, sum + root.value, list)
	if (root.right) branchSums(root.right, sum + root.value, list)	
	
	return list
}
