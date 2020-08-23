/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const ans = [];

  const dfs = (idx, path) => {
    if (idx >= s.length) {
      ans.push([].concat(path));
      return;
    }
    for (let i = idx; i < s.length; i++) {
      let l = idx;
      let r = i;
      let isP = true;
      while (l < r) {
        if (s[l++] !== s[r--]) {
          isP = false;
          break;
        }
      }
      if (!isP) continue;
      path.push(s.substring(idx, i + 1));
      dfs(i + 1, path);
      path.pop();
    }
  };

  dfs(0, []);
  return ans;
};
