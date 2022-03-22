function merge(left, right) {
	const arr = []
	
	while (left.length && right.length) {
		if (left[0] < right[0]) {
			arr.push(left.shift())
		} else {
			arr.push(right.shift())
		}
	}
	
	return [...arr, ...left, ...right] 
}

function mergeSort(arr) {
	if (arr.length < 2) return arr
	
	const mid = Math.ceil(arr.length / 2);
	const left = mergeSort(arr.slice(0, mid))
	const right = mergeSort(arr.slice(mid))
	
	return merge(left, right)
}

// O(nlogn) time | O(n) space
export function nonConstructibleChange(coins) {
	const sortedCoins = mergeSort(coins)
	let sum = 0
	
	for (let idx = 0; idx < sortedCoins.length; idx++) {
		if (sortedCoins[idx] <= sum + 1) {
			sum += sortedCoins[idx]
		}		
	} 
	
  return sum + 1;
}