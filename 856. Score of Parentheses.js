/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function (S) {
  const score = [];
  let cur = 0;
  for (let i = 0; i < S.length; i++) {
    if (S[i] === "(") {
      score.push(cur);
      cur = 0;
    } else {
      cur = score.pop() + Math.max(cur * 2, 1);
    }
  }
  return cur;
};
