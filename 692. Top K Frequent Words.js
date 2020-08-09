/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const map = new Map();
  for (let i = 0; i < words.length; i++) {
    if (!map.get(words[i])) map.set(words[i], 0);
    map.set(words[i], map.get(words[i]) + 1);
  }
  const arr = [...map];
  arr.sort((a, b) => {
    if (a[1] > b[1]) return -1;
    else if (a[1] < b[1]) return 1;
    else return a[0] < b[0] ? -1 : 1;
  });
  const ans = [];
  for (let i = 0; i < k; i++) {
    ans.push(arr[i][0]);
  }
  return ans;
};
