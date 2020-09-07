/**
 * @param {string[]} words
 * @return {boolean}
 */
var validWordSquare = function (words) {
  const m = words.length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (words[i].length > m) return false;
      if (words[i][j] !== words[j][i]) return false;
    }
  }
  return true;
};
