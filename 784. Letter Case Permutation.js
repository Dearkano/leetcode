/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function (S) {
  const ans = [];
  const dfs = (start, path) => {
    if (path.length === S.length) {
      ans.push(path.join(""));
      return;
    }

    for (let i = start; i < S.length; i++) {
      if (S.charCodeAt(i) <= 90 && S.charCodeAt(i) >= 65) {
        path.push(String.fromCharCode(S.charCodeAt(i) + 32));
        dfs(i + 1, path);
        path.pop();
      } else if (S.charCodeAt(i) >= 97 && S.charCodeAt(i) <= 122) {
        path.push(String.fromCharCode(S.charCodeAt(i) - 32));
        dfs(i + 1, path);
        path.pop();
      }

      path.push(S[i]);
      dfs(i + 1, path);
      path.pop();
    }
  };
  dfs(0, [])
  return ans
};

console.log(letterCasePermutation('a1b2'))