/**
 * @param {character[][]} picture
 * @return {number}
 */
var findLonelyPixel = function (picture) {
  const m = picture.length;
  if (m === 0) return 0;
  const n = picture[0].length;
  let ans = 0;
  const rows = new Array(m).fill(0);
  const cols = new Array(n).fill(0);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (picture[i][j] === "B") {
        rows[i]++;
        cols[j]++;
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (picture[i][j] === "B" && rows[i] === 1 && cols[j] === 1) ans++;
    }
  }
  return ans;
};
