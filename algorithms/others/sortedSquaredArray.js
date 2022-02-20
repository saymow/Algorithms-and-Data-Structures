// O(n) time | O(n) space
function sortedSquaredArray(array) {
	const squaredArray =  new Array(array.length).fill(0)
	let lIdx = 0, rIdx = array.length - 1 	
	
	for (let i = array.length - 1; i >= 0; i--) {
		if (Math.abs(array[lIdx]) > Math.abs(array[rIdx])) {
			squaredArray[i] = array[lIdx] * array[lIdx]
			lIdx++
		} else {
			squaredArray[i] = array[rIdx] * array[rIdx]
			rIdx--
		}
	}
	
	return squaredArray
}
