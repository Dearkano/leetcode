/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();
  for (const str of strs) {
    const arr = str.split("").map((i) => i.charCodeAt(0));
    arr.sort((a, b) => a - b);
    const key = arr.map((i) => String.fromCharCode(i)).join("");
    if (!map.get(key)) map.set(key, []);
    map.get(key).push(str);
  }
  const ans = [];
  for (const pair of map) {
    ans.push(pair[1]);
  }
  return ans;
};
