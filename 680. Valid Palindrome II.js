/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    if (s[l] !== s[r]) {
      let l1 = l;
      let r1 = r - 1;
      let l2 = l + 1;
      let r2 = r;
      while (l1 < r1 && s[l1] === s[r1]) {
        l1++;
        r1--;
      }
      while (l2 < r2 && s[l2] === s[r2]) {
        l2++;
        r2--;
      }
      return l1 >= r1 || l2 >= r2;
    } else {
      l++;
      r--;
    }
  }
  return true;
};

console.log(validPalindrome("cba"));
