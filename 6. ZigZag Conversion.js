/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let ans = "";
  if (numRows === 1) return s;
  for (let i = 0; i < numRows; i++) {
    const step1 = (numRows - 1 - i) * 2;
    const step2 = i * 2;
    let p = i;
    if (p < s.length) ans += s[p];
    while (p < s.length) {
      p += step1;
      if (p >= s.length) break;
      if (step1 > 0) ans += s[p];
      p += step2;
      if (p >= s.length) break;
      if (step2 > 0) ans += s[p];
    }
  }
  return ans;
};
