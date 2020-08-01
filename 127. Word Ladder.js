/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return 0;
  const visited = new Set();
  let beginSet = new Set();
  beginSet.add(beginWord);
  let endSet = new Set();
  endSet.add(endWord);
  let len = 1;
  while (beginSet.size > 0 && endSet.size > 0) {
    if (beginSet.size > endSet.size) {
      const temp = endSet;
      endSet = beginSet;
      beginSet = temp;
    }
    const tempSet = new Set();
    for (const word of beginSet) {
      const arr = [];
      for (let k = 0; k < word.length; k++) {
        arr[k] = word[k];
      }
      for (let i = 0; i < beginWord.length; i++) {
        const p = arr[i];
        for (let c = 97; c <= 122; c++) {
          const char = String.fromCharCode(c);
          arr[i] = char;
          const cur = arr.join("");

          if (endSet.has(cur)) return len + 1;
          if (!visited.has(cur) && wordList.includes(cur)) {
            visited.add(cur);
            tempSet.add(cur);
          }
          arr[i] = p;
        }
      }
    }
    len++;
    beginSet = tempSet;
  }

  return 0;
};

console.log(
  ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
);
