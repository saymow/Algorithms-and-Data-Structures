import { readFile } from "fs";

const _countInversion = (args) => {
  let [arr, count] = args;
  if (arr.length === 1) return args;

  const mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  let [sortedLeft, x] = _countInversion([left, count]);
  let [sortedRight, y] = _countInversion([right, count]);
  let [sortedArr, z] = countSplitInversion(sortedLeft, sortedRight);

  return [sortedArr, x + y + z];
};

const countSplitInversion = (left, right) => {
  const arr = [];
  let invCount = 0,
    i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] > right[j]) {
      arr.push(right[j++]);
      invCount += left.length - i;
    } else {
      arr.push(left[i++]);
    }
  }

  return [[...arr, ...left.slice(i), ...right.slice(j)], invCount];
};

const countInversion = (arr) => {
  //complexity (n.logn)
  return _countInversion([arr, 0])[1];
};

console.log(countInversion([1, 6, 4, 3, 7]) === 3);
console.log(countInversion([8, 4, 2, 1]) === 6);
console.log(countInversion([3, 5, 1, 4, 3]) === 5);

readFile("./countInversionsSample.txt", "utf8", (err, file) => {
  if (err) {
    throw Error("Could not read file: " + err);
  }
  const dataSet = file.split("\n").map((strNum) => parseInt(strNum, 10));

  console.log(countInversion(dataSet));
});
