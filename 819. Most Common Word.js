/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  paragraph = paragraph.replace(/[^\w&&^\s]/g, " ");
  const map = new Map();
  const arr = paragraph.split(/\s+/).map((w) => w.toLowerCase());
  let max = 0;
  let ans = "";
  for (const w of arr) {
    if (!banned.includes(w)) {
      if (map.get(w) === undefined) map.set(w, 0);
      map.set(w, map.get(w) + 1);
      if (map.get(w) > max) {
        max = map.get(w);
        ans = w;
      }
    }
  }
  return ans;
};
console.log(mostCommonWord("a, a, a, a, b,b,b,c, c", ["a"]));
