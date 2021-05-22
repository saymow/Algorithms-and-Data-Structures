const swap = (arr, i, j) => {
  let tmp = arr[j];
  arr[j] = arr[i];
  arr[i] = tmp;
};

const heapify = (arr, i, n) => {
  let largestIndex = i;
  const leftChildIndex = 2 * i + 1;
  const rightChildIndex = 2 * i + 2;

  if (leftChildIndex < n && arr[leftChildIndex] > arr[largestIndex]) {
    largestIndex = leftChildIndex;
  }

  if (rightChildIndex < n && arr[rightChildIndex] > arr[largestIndex]) {
    largestIndex = rightChildIndex;
  }

  if (largestIndex !== i) {
    swap(arr, i, largestIndex);

    heapify(arr, largestIndex, n);
  }
};

export default function heapSort(arr) {
  const n = arr.length;

  for (let i = Math.floor(n / 2 - 1); i >= 0; i--) {
    heapify(arr, i, n);
  }

  for (let i = n - 1; i > 0; i--) {
    swap(arr, 0, i);

    heapify(arr, 0, i);
  }

  return arr;
}
