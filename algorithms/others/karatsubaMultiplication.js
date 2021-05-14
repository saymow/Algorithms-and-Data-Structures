// https://en.wikipedia.org/wiki/Karatsuba_algorithm

const split = (number, n2, len) => {
  const high = BigInt(String(number).substring(0, len - parseInt(n2)));
  const low = BigInt(String(number).substring(len - parseInt(n2), len));

  return [high, low];
};

const padZeroRight = (number, zeroQty) => {
  return BigInt(String(number).concat("0".repeat(zeroQty)));
};

// Complexity O(n^2)
const naiveMultiplication = (num1, num2) => {
  if (num1 < 10 || num2 < 10) return num1 * num2;

  const len1 = num1.toString().length;
  const len2 = num2.toString().length;
  const n = Math.max(len1, len2);
  const n2 = BigInt(Math.floor(n / 2));

  const [a, b] = split(num1, n2, len1);
  const [c, d] = split(num2, n2, len2);

  const ac = naiveMultiplication(a, c);
  const bd = naiveMultiplication(b, d);
  const ad_plus_bc = naiveMultiplication(a, d) + naiveMultiplication(b, c);
  const num1_times_num2 = BigInt(padZeroRight(ac, 2 * parseInt(n2)) + padZeroRight(ad_plus_bc, parseInt(n2)) + bd);

  return num1_times_num2;
};

// Complexity O(n^1.585)
const karatsubaMultiplication = (num1, num2) => {
  if (num1 < 10 || num2 < 10) return num1 * num2;

  const len1 = num1.toString().length;
  const len2 = num2.toString().length;
  const n = Math.max(len1, len2);
  const n2 = BigInt(Math.floor(n / 2));

  const [a, b] = split(num1, n2, len1);
  const [c, d] = split(num2, n2, len2);

  const ac = karatsubaMultiplication(a, c);
  const bd = karatsubaMultiplication(b, d);
  const ad_plus_bc = karatsubaMultiplication(a + b, c + d) - ac - bd;
  const num1_times_num2 = BigInt(padZeroRight(ac, 2 * parseInt(n2)) + padZeroRight(ad_plus_bc, parseInt(n2)) + bd);

  return num1_times_num2;
};

console.log(
  karatsubaMultiplication(
    "3141592653589793238462643383279502884197169399375105820974944592",
    "2718281828459045235360287471352662497757247093699959574966967627"
  ) == "8539734222673567065463550869546574495034888535765114961879601127067743044893204848617875072216249073013374895871952806582723184"
);

console.log(
  naiveMultiplication("3141592653589793238462643383279502884197169399375105820974944592", "2718281828459045235360287471352662497757247093699959574966967627") ==
    "8539734222673567065463550869546574495034888535765114961879601127067743044893204848617875072216249073013374895871952806582723184"
);
