
// O(nlog) time | O(1) space
export function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
	redShirtSpeeds.sort((a, b) => a - b)
	blueShirtSpeeds.sort((a, b) => a - b)
	let speedCount = 0

	for (let idx = 0; idx < redShirtSpeeds.length; idx++) {
			const v1 = redShirtSpeeds[idx]
			const v2 = blueShirtSpeeds[fastest ? (blueShirtSpeeds.length - 1) - idx : idx]
			const velocity = Math.max(v1, v2)
			
			speedCount += velocity
	}
  
  return speedCount;
}