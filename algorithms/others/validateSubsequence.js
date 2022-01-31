// O(n) time | O(1) space - where n is the length of the array
function isValidSubsequence(array, sequence) {
  let arrIdx = 0, seqIdx = 0;
	
	while (arrIdx < array.length && seqIdx < sequence.length) {
		if (array[arrIdx] === sequence[seqIdx]) {	
			seqIdx++;
		}
		
		arrIdx++;
	}
	
  return sequence.length === seqIdx;
}
