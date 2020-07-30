/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (str) {
  if (!str.includes("[")) return str;
  let ans = "";
  let l = 0;
  let r = 0;
  let start = 0;
  let firstL = 0;
  for (let i = 0; i < str.length; i++) {
    if (l === 0 && str[i] === "[") firstL = i;
    if (str[i] === "[") l++;
    if (str[i] === "]") r++;
    if (l === r && l > 0) {
      let p = firstL - 1;
      while (!isNaN(Number(str[p]))) p--;
      ans += str.substring(start, p + 1);
      const coeffcient = Number(str.substring(p + 1, firstL));
      const temp = decodeString(str.substring(firstL + 1, i));
      for (let k = 0; k < coeffcient; k++) ans += temp;
      l = 0;
      r = 0;
      start = i + 1;
    }
  }
  ans += str.substring(start);
  return ans;
};
console.log(decodeString("3[a]2[b]"));
