// O(nlogn) time | O(1) space
export function minimumWaitingTime(queries) {
  let totalWaitingTime = 0
	
	queries.sort((a, b) => a - b)
	
	for (let idx = 0; idx < queries.length; idx++) {
		const duration = queries[idx]
		const queriesLeft = queries.length - (idx + 1)
		totalWaitingTime += (duration * queriesLeft)
	}
	
	return totalWaitingTime
}
