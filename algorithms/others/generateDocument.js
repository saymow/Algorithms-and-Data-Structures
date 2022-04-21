// O (n + m) time | O (c) space - where n is the characters string length and m is the document string length,
// and c is the quantity of unique char in the characters string
export function generateDocument(characters, document) {
  const charsRecord = {};
	
	for (const char of characters) {
		if (!(char in charsRecord)) charsRecord[char] = 0
		
		charsRecord[char]++;
	}
	
	for (const char of document) {
		if (!(char in charsRecord) || charsRecord[char] === 0) return false
		
		charsRecord[char]--;
	}
	
  return true;
}
