/**
 * @param {string} s
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var findLexSmallestString = function (s, a, b) {
  const add = (str) => {
    const arr = str.split("");
    for (let i = 1; i < str.length; i += 2) {
      arr[i] = (Number(arr[i]) + a) % 10;
    }
    return arr.join("");
  };
  const rotate = (str) => {
    const arr = str.split("").reverse();
    const l = arr.slice(0, b);
    const r = arr.slice(b);
    return l.reverse().join("") + r.reverse().join("");
  };
  const set = new Set();
  let ans = s;
  const dfs = (str) => {
    if (set.has(str)) return;
    set.add(str);
    ans = ans < str ? ans : str;
    dfs(add(str));
    dfs(rotate(str));
  };
  dfs(s);
  return ans;
};

findLexSmallestString("5525", 9, 2);
