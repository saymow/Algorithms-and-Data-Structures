// O(n) time | O(n) space
export function caesarCipherEncryptor(string, key) {
  let newString = ""
	
	for (const letter of string) {
		newString += getNewLetter(letter, key)
	}
	
	return newString
}

const getNewLetter = (letter, key) => {
	return String.fromCharCode(getAlphabetLowerCaseBoundedChar(letter.charCodeAt(0) + key))
}

const getAlphabetLowerCaseBoundedChar = (charCode) => {
	return 97 + (charCode % 97 % 26)
}