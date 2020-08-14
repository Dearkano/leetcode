/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function (words) {
  const root = new TrieNode();
  for (const w of words) {
    let node = root;
    for (let i = 0; i < w.length; i++) {
      if (!node.next[w.charCodeAt(i) - 97])
        node.next[w.charCodeAt(i) - 97] = new TrieNode();
      node = node.next[w.charCodeAt(i) - 97];
    }
    node.isEnd = true;
  }
  const test = (word, start, count) => {
    let node = root;
    for (let i = start; i < word.length; i++) {
      if (!node.next[word.charCodeAt(i) - 97]) return false;
      if (node.next[word.charCodeAt(i) - 97].isEnd) {
        if (i === word.length - 1) return count >= 1;
        if (test(word, i + 1, count + 1)) return true;
      }
      node = node.next[word.charCodeAt(i) - 97];
    }
    return false;
  };
  const ans = [];
  for (const w of words) {
    if (test(w, 0, 0)) ans.push(w);
  }
  return ans;
};

const TrieNode = function () {
  this.next = [];
  this.isEnd = false;
};

console.log(
  findAllConcatenatedWordsInADict([
    "cat",
    "cats",
    "catsdogcats",
    "dog",
    "dogcatsdog",
    "hippopotamuses",
    "rat",
    "ratcatdogcat",
  ])
);
