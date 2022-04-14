export default function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
		for (let j = i - 1; j >= 0; j--) {
			if (array[j] > array[j + 1]) {
				swap(array, j, j + 1)
			}			
		}	
	}
	
  return array;
}

function swap(array, i, j) {
	let tmp = array[i]
	array[i] = array[j]
	array[j] = tmp
}