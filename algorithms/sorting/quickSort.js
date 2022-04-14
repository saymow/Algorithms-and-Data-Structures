const swap = (arr, a, b) => {
  const tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
};

const partition = (arr, l, r) => {
  const p = arr[l];
  let i = l + 1;

  for (let j = l; j <= r; j++) {
    if (arr[j] < p) {
      swap(arr, j, i);
      i++;
    }
  }

  swap(arr, l, i - 1);

  return [i - 1, arr];
};

const median2 = ([a, aI], [b, bI], [c, cI]) => {
  return (a > b) ^ (a > c) ? aI : (a > b) ^ (b > c) ? cI : bI;
};

const getPivotPerMedian = (arr, l, r) => {
  const startInclusive = l;
  const endInclusive = r;
  const middle = Math.floor((startInclusive + endInclusive) / 2);

  return median2([arr[startInclusive], startInclusive], [arr[middle], middle], [arr[endInclusive], endInclusive]);
};

const _quickSort = (arr, l, r) => {
  if (l >= r) return arr;

  const medianPivot = getPivotPerMedian(arr, l, r);

  swap(arr, l, medianPivot);

  const [p] = partition(arr, l, r);

  _quickSort(arr, l, p - 1);
  _quickSort(arr, p + 1, r);

  return arr;
};

export default function quickSort(arr) {
  return _quickSort(arr, 0, arr.length - 1);
}

