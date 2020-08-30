/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  const prefix = strs[0].split("");
  let len = strs[0].length;
  for (let i = 1; i < strs.length; i++) {
    for (let j = 0; j < strs[i].length && j < len; j++) {
      if (prefix[j] !== strs[i][j]) {
        len = Math.min(len, j);
        break;
      }
    }
    len = Math.min(len, strs[i].length);
  }
  return prefix.slice(0, len).join("");
};
