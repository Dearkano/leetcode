/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
  let rml = 0;
  let rmr = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") rml++;
    else if (s[i] === ")") {
      if (rml > 0) rml--;
      else rmr++;
    }
  }
  const ans = new Set();
  const dfs = (str, start, l, r, open) => {
    if (l < 0 || r < 0 || open < 0) return;
    if (start === s.length) {
      if (l === 0 && r === 0 && open === 0) ans.add(str);
      return;
    }

    if (s[start] === "(") {
      dfs(str, start + 1, l - 1, r, open);
      dfs(str + s[start], start + 1, l, r, open + 1);
    } else if (s[start] === ")") {
      dfs(str, start + 1, l, r - 1, open);
      dfs(str + s[start], start + 1, l, r, open - 1);
    } else {
      dfs(str + s[start], start + 1, l, r, open);
    }
  };
  dfs("", 0, rml, rmr, 0);
  return [...ans];
};

console.log(removeInvalidParentheses("(a)())()"));
