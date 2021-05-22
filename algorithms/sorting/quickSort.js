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

const _quickSort = (arr, l, r) => {
  if (l >= r) return arr;

  const [p] = partition(arr, l, r);

  _quickSort(arr, l, p - 1);
  _quickSort(arr, p + 1, r);

  return arr;
};

export default function quickSort(arr) {
  return _quickSort(arr, 0, arr.length - 1);
}
