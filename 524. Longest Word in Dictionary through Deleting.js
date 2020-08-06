/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function (s, d) {
  const ans = [];
  d.sort((a, b) => {
    if (b.length > a.length) return 1;
    else if (b.length < a.length) return -1;
    else return a < b ? -1 : 1;
  });
  for (const word of d) {
    let p = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === word[p]) {
        p++;
      }
      if (p === word.length) {
        return word;
      }
    }
  }
  return "";
};

console.log(findLongestWord("asdfas", ["a", "b", "c"]));
