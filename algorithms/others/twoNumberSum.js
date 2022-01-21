function twoNumberSum(array, targetSum) {
  const response = []
  
	outerLoop:
	for (let i = 0; i < array.length; ++i) {
		for (let j = 1; j < array.length; ++j) {
			if ((array[i] !== array[j]) && ((array[i] + array[j]) === targetSum)) {
				response.push(array[i], array[j])
				break outerLoop;
			}
		}
	}
	
	return response;
}