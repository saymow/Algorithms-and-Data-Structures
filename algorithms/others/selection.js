const swap = (arr, i, j) => {
  let tmp = arr[j];
  arr[j] = arr[i];
  arr[i] = tmp;
};

const partition = (arr, l, r) => {
  const p = arr[l];
  let i = l + 1;
  let pNewIndex;

  for (let j = l; j <= r; j++) {
    if (arr[j] < p) {
      swap(arr, i, j);
      i++;
    }
  }

  pNewIndex = i - 1;
  swap(arr, l, pNewIndex);

  return [pNewIndex, arr[pNewIndex]];
};

const _selection = (arr, l, r, i) => {
  if (l > r) return;

  const [pIndex, p] = partition(arr, l, r);

  if (pIndex == i) return p;
  else if (pIndex > i) return _selection(arr, l, pIndex - 1, i);
  else return _selection(arr, pIndex + 1, r, i);
};

// get ith element of an array (best usage is to get the median)
const selection = (arr, i) => _selection(arr, 0, arr.length - 1, i - 1);

// common cases
console.log(selection([3, 7, 1, 6], 2) === 3);
console.log(selection([9, 2, 1, 4, 6], 3) === 4);
console.log(selection([1, 2, 3], 3) === 3);
console.log(selection([4, 5, 1, 3, 4, 5, 6, 7], 4) === 4);

// // median
console.log(selection([3, 7, 1, 6], Math.ceil(4 / 2)) === 3);
console.log(selection([9, 2, 1, 4, 6], Math.ceil(5 / 2)) === 4);
console.log(selection([1, 2, 3], Math.ceil(3 / 2)) === 2);
console.log(selection([4, 5, 1, 3, 4, 5, 6, 7], Math.ceil(8 / 2)) === 4);
