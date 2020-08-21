/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function (s, t) {
  if (s === t) return false;
  if (Math.abs(s.length - t.length) > 1) return false;
  for (let i = 0; i < s.length && i < t.length; i++) {
    if (s[i] === t[i]) continue;
    // replace
    if (s.substring(i + 1) === t.substring(i + 1)) return true;
    // insert
    if (s.substring(i) === t.substring(i + 1)) return true;
    // delete
    if (s.substring(i + 1) === t.substring(i)) return true;
    return false;
  }
  return true;
};
