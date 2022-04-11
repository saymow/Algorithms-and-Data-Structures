// O(n) time | O(d) space - where n is the total number of elements and 
// d is the depth of the innermost "SpecialArray"
export function productSum(array, depth = 1) {
	let sum = 0;
	
	for (let i = 0; i < array.length; i++) {
		if (Array.isArray(array[i])) {
			sum += productSum(array[i], depth + 1) 
		} else {
			sum += array[i] 
		}
	}
	
	return sum * depth
}
