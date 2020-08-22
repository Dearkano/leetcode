/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let ans = 0;
  let p = chars[0];
  let k = 1;
  for (let i = 1; i < chars.length; i++) {
    if (chars[i] === p) {
      k++;
    } else {
      chars[ans++] = p;
      if (k > 1) {
        const s = k.toString();
        for (let j = 0; j < s.length; j++) chars[ans++] = s[j];
      }
      k = 1;
      p = chars[i];
    }
  }
  chars[ans++] = p;
  if (k > 1) {
    const s = k.toString();
    for (let j = 0; j < s.length; j++) chars[ans++] = s[j];
  }
  return ans;
};
