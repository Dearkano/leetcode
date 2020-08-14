/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
  const trie = new TrieNode();
  products.sort((a, b) => (a < b ? -1 : 1));
  for (const p of products) {
    let node = trie;
    for (let i = 0; i < p.length; i++) {
      if (!node.next[p.charCodeAt(i) - 97])
        node.next[p.charCodeAt(i) - 97] = new TrieNode();
      node = node.next[p.charCodeAt(i) - 97];
      if (node.words.length < 3) node.words.push(p);
    }
  }
  let ans = [];
  let node = trie;
  for (let i = 0; i < searchWord.length; i++) {
    node = node.next[searchWord.charCodeAt(i) - 97];
    if (!node) {
      for (let j = i; j < searchWord.length; j++) ans.push([]);
      break;
    }
    ans.push(node.words);
  }
  return ans;
};

const TrieNode = function () {
  this.next = [];
  this.words = [];
};

console.log(suggestedProducts(["havana"], "hsvana"));
