/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function (points, K) {
  const swap = (i, j) => {
    const temp = points[i];
    points[i] = points[j];
    points[j] = temp;
  };
  const dist = (p) => p[0] ** 2 + p[1] ** 2;
  const qsort = (l, r) => {
    if (l >= r) return;
    let p = l - 1;
    for (let i = l; i <= r; i++) {
      if (dist(points[i]) <= dist(points[r])) {
        p++;
        swap(p, i);
      }
    }
    if (p === K) return;
    if (p > K) qsort(l, p - 1);
    else qsort(p + 1, r);
  };
  qsort(0, points.length - 1);
  return points.slice(0, K);
};

console.log(
  kClosest(
    [
      [1, 3],
      [-2, 2],
      [2, -2],
    ],
    2
  )
);
