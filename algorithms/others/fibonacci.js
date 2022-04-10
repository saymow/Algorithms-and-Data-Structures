// Iteratively

// O(n) time | O(1) space
export function getNthFib(n) {
	let tmp, i = 0, j = 1;
	
	while (n > 1) {
		tmp = i
		i += j
		j = tmp
		n--;
	}
	
  return i;
}

// Recursively

// O(2^n) time | O(n) space
export function getNthFib(n) {
	if (n === 1) return 0;
	if (n === 2) return 1
	
	return getNthFib(n - 1) + getNthFib(n - 2)
}

