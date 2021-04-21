// https://en.wikipedia.org/wiki/Karatsuba_algorithm

const split = (number) => {
  const n = number.toString().length
  const n2 = Math.floor(n / 2)
  const divider = 10 ** n2

  const num1 = Math.floor(number / divider)
  const num2 = number % divider

  return [num1, num2]
}

// Complexity O(n^2)
const naiveMultiplication = (num1, num2) => {
  if (num1 < 10 || num2 < 10) return num1 * num2

  const n = Math.max(num1.toString().length, num2.toString().length)
  const n2 = Math.floor(n / 2)

  const [a, b] = split(num1)
  const [c, d] = split(num2)

  const ac = naiveMultiplication(a, c)
  const bd = naiveMultiplication(b, d)
  const ad_plus_bc = naiveMultiplication(a, d) + naiveMultiplication(b, c)

  return 10 ** (2 * n2) * ac + 10 ** n2 * ad_plus_bc + bd
}

// Complexity O(n^1.585)
const karatsubaMultiplication = (num1, num2) => {
  if (num1 < 10 || num2 < 10) return num1 * num2

  const n = Math.max(num1.toString().length, num2.toString().length)
  const n2 = Math.floor(n / 2)

  const [a, b] = split(num1)
  const [c, d] = split(num2)

  const ac = karatsubaMultiplication(a, c)
  const bd = karatsubaMultiplication(b, d)
  const ad_plus_bc = karatsubaMultiplication(a + b, c + d) - ac - bd

  return 10 ** (2 * n2) * ac + 10 ** n2 * ad_plus_bc + bd
}

console.log(naiveMultiplication(1234, 5678) === 7006652)
console.log(naiveMultiplication(25, 10) === 250)
console.log(naiveMultiplication(25, 25) === 625)
console.log(naiveMultiplication(100, 100) === 10000)

console.log(karatsubaMultiplication(1234, 5678) === 7006652)
console.log(karatsubaMultiplication(25, 10) === 250)
console.log(karatsubaMultiplication(25, 25) === 625)
console.log(karatsubaMultiplication(100, 100) === 10000)
