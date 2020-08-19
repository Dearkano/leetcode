/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  const set = new Set();
  const stack = [];
  const ans = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push(i);
    if (stack.length === 0 && s[i] === ")") set.add(i);
    else if (s[i] === ")") {
      stack.pop();
    }
  }
  stack.forEach((item) => set.add(item));
  for (let i = 0; i < s.length; i++) {
    if (!set.has(i)) ans.push(s[i]);
  }
  return ans.join("");
};
