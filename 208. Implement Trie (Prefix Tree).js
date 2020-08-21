/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.root = new TrieNode();
};

var TrieNode = function () {
  this.next = {};
  this.isWord = false;
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let cur = this.root;
  for (let i = 0; i < word.length; i++) {
    if (!cur.next[word[i]]) cur.next[word[i]] = new TrieNode();
    cur = cur.next[word[i]];
    if (i === word.length - 1) cur.isWord = true;
  }
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let cur = this.root;
  for (let i = 0; i < word.length; i++) {
    if (!cur.next[word[i]]) return false;
    cur = cur.next[word[i]];
    if (i === word.length - 1 && cur.isWord) return true;
  }
  return false;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  const word = prefix;
  let cur = this.root;
  for (let i = 0; i < word.length; i++) {
    if (!cur.next[word[i]]) return false;
    cur = cur.next[word[i]];
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
