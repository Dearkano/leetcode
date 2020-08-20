/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let ans = 0;
  const stack = [-1];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    }
    if (s[i] === ")") {
      const r = stack.pop();
      if (stack.length === 0) {
        stack.push(i);
      } else {
        ans = Math.max(ans, i - stack[stack.length - 1]);
      }
    }
  }
  return ans;
};
