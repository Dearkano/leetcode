/**
 * Initialize your data structure here.
 */
var WordDictionary = function () {
  this.db = new Map();
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  if (!this.db.get(word.length)) this.db.set(word.length, []);
  this.db.get(word.length).push(word);
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  const arr = this.db.get(word.length);
  if (!arr) return false;
  for (const s of arr) {
    let i = 0;
    for (; i < word.length; i++) {
      if (word[i] === "." || word[i] === s[i]) continue;
      break;
    }
    if (i === word.length) return true;
  }
  return false
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
