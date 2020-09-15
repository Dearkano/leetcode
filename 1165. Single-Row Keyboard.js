/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
var calculateTime = function (keyboard, word) {
  const map = new Map();
  for (let i = 0; i < keyboard.length; i++) {
    map.set(keyboard[i], i);
  }

  let ans = 0;
  let cur = 0;
  for (let i = 0; i < word.length; i++) {
    const pos = map.get(word[i]);
    ans += Math.abs(cur - pos);
    cur = pos;
  }

  return ans;
};
