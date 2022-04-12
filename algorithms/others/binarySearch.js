// O(logn) time | O(1) space
export function binarySearch(array, target) {
	let left = 0;
	let right = array.length - 1;
	let pivot = Math.floor(right / 2)
	
	while (left <= right) {
		if (array[pivot] === target) return pivot
		else if (target > array[pivot]) {
			left = pivot + 1
		} else {
			right = pivot - 1
		}
		pivot = Math.floor((left + right) / 2)
	}
	
	return -1;
}
