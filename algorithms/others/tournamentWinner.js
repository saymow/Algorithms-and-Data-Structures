const getMatchWinner = (match, result) => match[result === 0 ? 1 : 0] 

const recordMatchWinner = (record, team) => {
	if (!(team in record)) record[team] = 0
	
	record[team] += 3 
}

// O(n) time | O(k) space - where n is the number of competitions and k is the number of teams
export function tournamentWinner(competitions, results) {
  let winner = ""
	const record  = { [winner]: 0 }
	
	for (let i = 0; i < competitions.length; i++) {
		const matchWinner = getMatchWinner(competitions[i], results[i])
		
		recordMatchWinner(record, matchWinner)
		
		if (record[matchWinner] > record[winner]) {
			winner = matchWinner
		}
	}
	
  return winner
}
