/**
 * @param {number} N
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function (N, mines) {
  const map = [];
  for (let x = 0; x < N; x++) {
    if (!map[x]) map[x] = [];
    // the max order is Math.round(N/2)
    for (let y = 0; y < N; y++) map[x][y] = Math.round(N / 2);
  }
  for (const mine of mines) {
    map[mine[0]][mine[1]] = 0;
  }

  // i represents the row i and col i
  // in each loop, we update both the row i and col i
  for (let i = 0; i < N; i++) {
      // represent the 1s amount in each direction
    let up = (down = right = left = 0);
    // j represents the right and down direction(0->N-1)
    // k represents the left and up direction(N-1->0)
    // in each loop, we update 4 points, and in all, we update 4*N^2 points
    // in details, we update every point 4 times, every time in differernt direction
    // and we only save the smallest value in 4 directions as the order of this point
    // if the point's value is 0, then the length in this direction will be reset to 0
    for (let j = 0, k = N - 1; j < N; j++, k--) {
      left = map[i][j] === 0 ? 0 : left + 1;
      map[i][j] = Math.min(map[i][j], left);
      right = map[i][k] === 0 ? 0 : right + 1;
      map[i][k] = Math.min(map[i][k], right);
      up = map[j][i] === 0 ? 0 : up + 1;
      map[j][i] = Math.min(map[j][i], up);
      down = map[k][i] === 0 ? 0 : down + 1;
      map[k][i] = Math.min(map[k][i], down);
    }
  }
  // finally we just need to find the point with the biggest order in the map
  let ans = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (map[i][j] > ans) ans = map[i][j];
    }
  }
  return ans;
};

console.log(orderOfLargestPlusSign(5, [[4, 2]]));
