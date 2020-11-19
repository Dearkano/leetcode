/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) return false;
  const count1 = new Array(26).fill(0);
  const count2 = new Array(26).fill(0);
  const set1 = new Set();
  const set2 = new Set();
  for (let i = 0; i < word2.length; i++) {
    count1[word1.charCodeAt(i) - 97]++;
    set1.add(word1[i]);
    count2[word2.charCodeAt(i) - 97]++;
    set2.add(word2[i]);
  }

  count1.sort((a, b) => a - b);
  count2.sort((a, b) => a - b);
  return (
    compareCharCounts(count1, count2) &&
    [...set1].every((i) => set2.has(i)) &&
    [...set2].every((i) => set1.has(i))
  );
};

const compareCharCounts = (count1, count2) => {
  for (let i = 0; i < 26; i++) {
    if (count1[i] !== count2[i]) return false;
  }
  return true;
};

console.log(
  closeStrings(
    "svotbsgqiqmeqjwdqqtkucrzqphqxqtqqlyfan",
    "aapyhufaaaalkqsvtjnaaoewxkrgsbsazadmci"
  )
);
