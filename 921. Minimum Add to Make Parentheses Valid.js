/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function (S) {
  let l = 0;
  let r = 0;
  for (const c of S) {
    if (c === "(") l++;
    if (c === ")") {
      if (l > 0) l--;
      else r++;
    }
  }
  return l + r
};
