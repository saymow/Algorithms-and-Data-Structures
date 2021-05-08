// complementary mergeSort

//O(nlogn)
function mergeSort(arr, filter) {
  if (arr.length < 2) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left, filter), mergeSort(right, filter), filter);
}

const merge = (left, right, filter) => {
  const arr = [];

  while (left.length !== 0 && right.length !== 0) {
    if (filter(left[0]) <= filter(right[0])) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  return [...arr, ...left, ...right];
};

// main algorithm
//https://en.wikipedia.org/wiki/Closest_pair_of_points_problem;

const d = (p1, p2) => Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));

// O(n^2)
const closestPairNaiveWay = (matrices) => {
  const closestPair = [];

  for (let i = 0; i < matrices.length; i++) {
    for (let j = i + 1; j < matrices.length; j++) {
      const p1 = matrices[i];
      const p2 = matrices[j];
      const distance = d(p1, p2);

      if (closestPair.length === 0 || closestPair[0] > distance) {
        closestPair[0] = distance;
        closestPair[1] = [p1, p2];
      }
    }
  }

  return closestPair;
};

const _closestPair = (px, py) => {
  if (px.length <= 3) {
    return closestPairNaiveWay(px);
  }

  const pxMid = Math.round(px.length / 2);
  const pyMid = Math.round(py.length / 2);
  const qx = px.slice(0, pxMid);
  const qy = py.slice(0, pyMid);
  const rx = px.slice(pxMid);
  const ry = py.slice(pyMid);

  const left = _closestPair(qx, qy);
  const right = _closestPair(rx, ry);
  const delta = Math.min(left[0], right[0]);

  const split = _closestSplitPair(px, py, delta);

  if (left[0] <= right[0] && left[0] <= split[0]) {
    return left;
  } else if (right[0] <= left[0] && right[0] <= split[0]) {
    return right;
  } else {
    return split;
  }
};

const _closestSplitPair = (px, py, delta) => {
  const lowerBound = 7;

  const pxMid = Math.floor(px.length / 2);
  const laneX = px[pxMid][0];
  const sy = [];
  const laneBoundaries = [laneX - delta, laneX + delta];
  let closest = delta;
  let closestPair = null;

  for (let i = 0; i < py.length; i++) {
    if (laneBoundaries[0] <= py[i][0] && laneBoundaries[1] >= px[i][0]) {
      sy.push(py[i]);
    }
  }

  for (let i = 0; i < sy.length; i++) {
    for (let j = i + 1; j < i + lowerBound && j < sy.length; j++) {
      const p = sy[i];
      const q = sy[j];
      const distance = d(p, q);

      if (distance < closest) {
        closest = distance;
        closestPair = [p, q];
      }
    }
  }

  return [closest, closestPair];
};

// O(nlogn)
const closestPair = (matrices) => {
  const px = mergeSort(matrices, (entry) => entry[0]);
  const py = mergeSort(matrices, (entry) => entry[1]);

  return _closestPair(px, py);
};

// (74.1,93.9), (15.4,101.8), (96.0,58.1), (13.4,30.4), (126.7,9.4), (62.3,48.3), (35.2,7.6), (84.6,27.6), (30.1,70.8)
console.log(
  closestPairNaiveWay([
    [74.1, 93.9],
    [15.4, 101.8],
    [96.0, 58.1],
    [13.4, 30.4],
    [126.7, 9.4],
    [62.3, 48.3],
    [35.2, 7.6],
    [84.6, 27.6],
    [30.1, 70.8],
  ])[0] === 30.426633070387524
);
console.log(
  closestPair([
    [74.1, 93.9],
    [15.4, 101.8],
    [96.0, 58.1],
    [13.4, 30.4],
    [126.7, 9.4],
    [62.3, 48.3],
    [35.2, 7.6],
    [84.6, 27.6],
    [30.1, 70.8],
  ])[0] === 30.426633070387524
);
