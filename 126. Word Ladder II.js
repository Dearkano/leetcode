/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
  const queue = [];
  const ans = [];
  const wordDict = new Set();
  const visited = new Set();
  let queueLen = queue.length;
  let idx = 0;
  queue.push([beginWord]);
  for (const w of wordList) wordDict.add(w);
  while (idx < queue.length) {
    while (idx < queueLen) {
      const path = queue[idx++];
      const cur = path[path.length - 1];
      const arr = cur.split("");
      for (let k = 0; k < arr.length; k++) {
        const temp = arr[k];
        for (let i = 97; i <= 122; i++) {
          arr[k] = String.fromCharCode(i);
          const str = arr.join("");
          if (wordDict.has(str)) {
            visited.add(str);
            const newPath = [].concat(path, str);
            queue.push(newPath);
            if (str === endWord) ans.push(newPath);
          }
        }
        arr[k] = temp;
      }
    }
    if (ans.length > 0) return ans;
    queueLen = queue.length;
    for (const s of visited) wordDict.delete(s);
    visited.clear();
  }
  return [];
};
