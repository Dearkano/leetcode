/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function (s) {
  const cnt = new Array(256).fill(0);
  let odd = 0;
  for (let i = 0; i < s.length; i++) {
    cnt[s.charCodeAt(i)]++;
    odd += (cnt[s.charCodeAt(i)] & 1) === 0 ? -1 : 1;
  }
  return odd <= 1;
};
console.log(canPermutePalindrome("AaBb//a"));
