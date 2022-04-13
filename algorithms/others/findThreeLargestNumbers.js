// O(n) time | O(1) space
export function findThreeLargestNumbers(array) {
	const threeLargest = [null, null, null]
	
	for (const item of array) {
		updateLargest(threeLargest, item)
	}
	
	return threeLargest
}

function updateLargest(threeLargest, n) {
	if (!threeLargest[2] || threeLargest[2] < n) {
		updateAndShift(threeLargest, 2, n)
	} else if (!threeLargest[1] || threeLargest[1] < n) {
		updateAndShift(threeLargest, 1, n)
	} else if (!threeLargest[0] || threeLargest[0] < n) {
		updateAndShift(threeLargest, 0, n)
	}
}

function updateAndShift(threeLargest, idx, n) {
	for (let j = 0; j <= idx; j++) {
		if (j === idx) {
			threeLargest[j] = n
		} else {
			threeLargest[j] = threeLargest[j + 1]
		}
	}
}

