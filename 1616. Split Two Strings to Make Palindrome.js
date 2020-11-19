/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
var checkPalindromeFormation = function (a, b) {
  let l = 0;
  let r = a.length - 1;
  while (r > l && a[l] === b[r]) {
    l++;
    r--;
  }
  if (isPalindrome(a, l, r) || isPalindrome(b, l, r)) return true;
  l = 0;
  r = a.length - 1;
  while (r > l && b[l] === a[r]) {
    l++;
    r--;
  }
  if (isPalindrome(a, l, r) || isPalindrome(b, l, r)) return true;
  return false;
};

const isPalindrome = (s, l, r) => {
  while (l < r) {
    if (s[l++] !== s[r--]) return false;
  }
  return true;
};
