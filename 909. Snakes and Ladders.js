/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function (board) {
  const n = board.length;
  const queue = [];
  let idx = 0;
  const getCoordinate = (id) => {
    id -= 1;
    const r = n - Math.floor(id / n) - 1;
    const c =
      n % 2 === 0
        ? r % 2 !== 0
          ? id % n
          : n - (id % n) - 1
        : r % 2 === 0
        ? id % n
        : n - (id % n) - 1;
    return [r, c];
  };
  queue.push(1);
  let len = queue.length;
  let ans = 0;
  while (idx < queue.length) {
    while (idx < len) {
      const cur = queue[idx++];
      if (cur === n * n) return ans;
      for (let next = cur + 1; next <= cur + 6 && next <= n * n; next++) {
        const [xx, yy] = getCoordinate(next);
        const dest = board[xx][yy] === -1 ? next : board[xx][yy];
        if (!queue.includes(dest)) {
          queue.push(dest);
        }
      }
    }
    len = queue.length;
    ans++;
  }
  return -1;
};
// console.log(
//   snakesAndLadders([
//     [-1, -1, -1, 46, 47, -1, -1, -1],
//     [51, -1, -1, 63, -1, 31, 21, -1],
//     [-1, -1, 26, -1, -1, 38, -1, -1],
//     [-1, -1, 11, -1, 14, 23, 56, 57],
//     [11, -1, -1, -1, 49, 36, -1, 48],
//     [-1, -1, -1, 33, 56, -1, 57, 21],
//     [-1, -1, -1, -1, -1, -1, 2, -1],
//     [-1, -1, -1, 8, 3, -1, 6, 56],
//   ])
// );

console.log(
  snakesAndLadders([
    [-1, -1, 19, 10, -1],
    [2, -1, -1, 6, -1],
    [-1, 17, -1, 19, -1],
    [25, -1, 20, -1, -1],
    [-1, -1, -1, -1, 15],
  ])
);
