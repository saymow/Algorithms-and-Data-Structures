// O(nlogn) time | O(1) space
export function classPhotos(redShirtHeights, blueShirtHeights) {
	let canBeBlue = true, canBeRed = true
	
	redShirtHeights.sort((a, b) => a - b)
	blueShirtHeights.sort((a, b) => a - b)
	
	for (let i = 0; i < blueShirtHeights.length; i++) {
		if (blueShirtHeights[i] <= redShirtHeights[i]) {
			canBeBlue = false
		} 
		if (redShirtHeights[i] <= blueShirtHeights[i])  {
			canBeRed = false
		}
	}
  
  return canBeBlue || canBeRed;
}
