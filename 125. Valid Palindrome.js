/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let _s = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") continue;
    if (
      (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) ||
      (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) ||
      !Number.isNaN(Number(s[i]))
    ) {
      _s += s[i];
    }
  }
  _s = _s.toLowerCase();
  let l = 0;
  let r = _s.length - 1;
  while (l < r) {
    if (_s[l] === _s[r]) {
      l++;
      r--;
    } else return false;
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
