/**
 * @param {number[][]} towers
 * @param {number} radius
 * @return {number[]}
 */
var bestCoordinate = function (towers, radius) {
  let startX = 0;
  let startY = 0;
  let endX = 0;
  let endY = 0;
  for (const tower of towers) {
    startX = Math.min(startX, tower[0]);
    startY = Math.min(startY, tower[1]);
    endX = Math.max(endX, tower[0]);
    endY = Math.max(endY, tower[1]);
  }

  const q = [];
  for (let i = 0; i <= endX - startX; i++) {
    q[i] = new Array(endY - startY + 1).fill(0);
  }

  const dis = (p1, p2) => {
    return Math.sqrt((p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2);
  };
  let ans = [0, 0];
  let max = 0;
  for (let i = startX; i <= endX; i++) {
    for (let j = startY; j <= endY; j++) {
      for (const tower of towers) {
        const [x, y, qi] = tower;
        const d = dis([x, y], [i, j]);
        if (d <= radius) q[i - startX][j - startY] += Math.floor(qi / (1 + d));
      }
      const cur = q[i - startX][j - startY];
      if (max < cur) {
        max = cur;
        ans = [i, j];
      }
    }
  }
  return ans;
};
console.log(
  bestCoordinate(
    [
      [2, 1, 9],
      [0, 1, 9],
    ],
    2
  )
);
