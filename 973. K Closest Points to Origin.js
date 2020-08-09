/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function (points, K) {
  //   const swap = (i, j) => {
  //     const temp = points[i];
  //     points[i] = points[j];
  //     points[j] = temp;
  //   };

  //   for (let i = 0; i < points.length && i < K; i++) {
  //     let minIndex = i;
  //     for (let j = i + 1; j < points.length; j++) {
  //       if (
  //         points[minIndex][0] ** 2 + points[minIndex][1] ** 2 >
  //         points[j][0] ** 2 + points[j][1] ** 2
  //       ) {
  //         minIndex = j;
  //       }
  //     }
  //     swap(minIndex, i);
  //   }
  points.sort((a, b) => a[0] ** 2 + a[1] ** 2 - b[0] ** 2 - b[1] ** 2);
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
