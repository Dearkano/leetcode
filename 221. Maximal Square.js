/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  if (matrix.length === 0) return 0;
  const map = [];
  for (let i = 0; i <= matrix.length; i++) {
    if (!map[i]) map[i] = [];
    for (let j = 0; j <= matrix[0].length; j++) {
      map[i][j] = 0;
    }
  }
  let ans = 0;
  // always calculate the right bottom point of the square
  // the length of this square depends on the shortest square length of this point's left, top and right point
  for (let i = 1; i <= matrix.length; i++) {
    for (let j = 1; j <= matrix[0].length; j++) {
      if (matrix[i - 1][j - 1] === "1") {
        map[i][j] =
          Math.min(map[i - 1][j], map[i][j - 1], map[i - 1][j - 1]) + 1;
        if (ans < map[i][j]) ans = map[i][j];
      }
    }
  }

  return ans * ans;
};
console.log(
  maximalSquare([
    ["1", "1", "1", "1", "1", "1", "1", "1"],
    ["1", "1", "1", "1", "1", "1", "1", "0"],
    ["1", "1", "1", "1", "1", "1", "1", "0"],
    ["1", "1", "1", "1", "1", "0", "0", "0"],
    ["0", "1", "1", "1", "1", "0", "0", "0"],
  ])
);
