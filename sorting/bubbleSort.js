export default function bubbleSort(arr) {
  let isSorted = false;

  function swap(arr, i, i2) {
    let temp = arr[i];
    arr[i] = arr[i2];
    arr[i2] = temp;
  }

  do {
    isSorted = true;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        isSorted = false;
      }
    }
  } while (!isSorted);

  return arr;
}
