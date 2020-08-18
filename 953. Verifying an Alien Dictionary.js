/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  const map = new Map();
  for (let i = 0; i < order.length; i++) map.set(order[i], i);
  for (let i = 1; i < words.length; i++) {
    let f = false;
    for (let j = 0; j < words[i].length && j < words[i - 1].length; j++) {
      if (map.get(words[i].charAt(j)) < map.get(words[i - 1].charAt(j)))
        return false;
      else if (map.get(words[i].charAt(j)) > map.get(words[i - 1].charAt(j))) {
        f = true;
        break;
      }
    }
    if (!f && words[i].length < words[i - 1].length) return false;
  }
  return true;
};
console.log(isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz"));
