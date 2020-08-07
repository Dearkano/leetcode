/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const ans = [];
  const combs = getComb(s.length);
  for (const item of combs) {
    let ip = "";
    let i = 0;
    for (const j in item) {
      const len = item[j];
      if (len > 1 && (s[i] === "0" || Number(s.substr(i, len)) > 255)) {
        ip = "";
        break;
      }
      ip += s.substr(i, len);
      if (j < 3) ip += ".";
      i += len;
    }
    if (ip) ans.push(ip);
  }
  return ans;
};

var getComb = (n) => {
  const ans = [];
  const dfs = (path, cur) => {
    if (cur === n && path.length === 4) {
      ans.push([].concat(path));
      return;
    } else if (cur > n || path.length === 4) return;
    for (let i = 1; i <= 3; i++) {
      path.push(i);
      dfs(path, cur + i);
      path.pop();
    }
  };
  dfs([], 0);
  return ans;
};

console.log(restoreIpAddresses("25525511135"));
