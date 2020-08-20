/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  if (!p) return s.length === 0;
  // why not just use if(!s) return?
  // because string '' matches pattern 'a*'
  const firstMatch = s.length > 0 && (s[0] === p[0] || p[0] === ".");

  if (p.length > 1 && p[1] === "*") {
    return (
      isMatch(s, p.substring(2)) || (firstMatch && isMatch(s.substring(1), p))
    );
  } else {
    return firstMatch && isMatch(s.substring(1), p.substring(1));
  }
};

console.log(isMatch("aa", "a"));
console.log(isMatch("aa", "a*"));
console.log(isMatch("aabcasd", "a.bca*s."));
console.log(isMatch("ab", ".*"));
console.log(isMatch("aab", "c*a*b"));
console.log(isMatch("mississippi", "mis*is*ip*."));
