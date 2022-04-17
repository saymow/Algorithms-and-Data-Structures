// O(n) time | (n) space
export function runLengthEncoding(string) {
  const encodedStringArray = []
	let currentElement, previousElement;
	let run = 1
	
	for (let i = 1; i < string.length; i++) {
		previousElement = string[i - 1]  
		currentElement = string[i]
		
		if (previousElement !== currentElement || run === 9) {
			encodedStringArray.push(run.toString())
			encodedStringArray.push(previousElement)
			run = 0
		}
		
		run++
	}
	
	encodedStringArray.push(run.toString())
	encodedStringArray.push(string[string.length - 1])
	
  return encodedStringArray.join('');
}


// O(n) time | O(n) space - using buffer concept
export function runLengthEncoding2(string) {
	let encoded = "",
			buffer = "",
			idx = 0

	const shouldResetBuffer = (idx) => {
		return (buffer !== "" && buffer[buffer.length - 1] !== string[idx]) ||
			buffer.length === 9 ||
			idx === string.length;
  }
	
	const resetBuffer = () => {
		encoded += `${buffer.length}${buffer[0]}`
		buffer = ""
	}
	
	const pushToBuffer = (char) => {
		buffer += char
	}
	
	while (idx < string.length || buffer !== "") {
		if (shouldResetBuffer(idx)) resetBuffer()
		
		if (idx < string.length) {
			pushToBuffer(string[idx])
			idx++
		}
	}

	return encoded;
}