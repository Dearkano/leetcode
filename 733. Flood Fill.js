/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  const m = image.length;
  const n = image[0].length;
  const prevColor = image[sr][sc];

  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const dfs = (i, j) => {
    image[i][j] = "#";
    for (const dir of dirs) {
      const x = i + dir[0];
      const y = j + dir[1];
      if (x >= 0 && y >= 0 && x < m && y < n && image[x][y] === prevColor) {
        dfs(x, y);
      }
    }
    image[i][j] = newColor;
  };

  dfs(sr, sc);
  return image;
};
