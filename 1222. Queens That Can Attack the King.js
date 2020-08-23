/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function (queens, king) {
  const ans = [];
  const set = new Set();
  for (const q of queens) {
    set.add(q.join("-"));
  }
  let dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ];

  for (const d of dir) {
    const t = [].concat(d);
    while (
      king[0] + t[0] >= 0 &&
      king[0] + t[0] < 8 &&
      king[1] + t[1] >= 0 &&
      king[1] + t[1] < 8
    ) {
      const key = `${king[0] + t[0]}-${king[1] + t[1]}`;
      if (set.has(key)) {
        ans.push(key.split("-").map((i) => Number(i)));
        break;
      }
      t[0] += d[0];
      t[1] += d[1];
    }
  }

  return ans;
};

console.log(
  queensAttacktheKing(
    [
      [0, 1],
      [1, 0],
      [4, 0],
      [0, 4],
      [3, 3],
      [2, 4],
    ],
    [0, 0]
  )
);
