/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function (s, k) {
  if (s.length === k) return true;
  const set = new Set();
  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) set.delete(s[i]);
    else set.add(s[i]);
  }
  return s.length >= k && set.size <= k;
};
console.log(canConstruct("ibzkwaxxaggkiwjbeysz", 15));
console.log(canConstruct("aaa", 2));

console.log(canConstruct("qlkzenwmmnpkopu", 15));
