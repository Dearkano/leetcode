/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!needle) return 0;
  if (needle.length > haystack.length) return -1;
  let cur = 0;
  while (true) {
    let flag = true;
    while (cur < haystack.length && haystack[cur] !== needle[0]) cur++;
    if (cur + needle.length > haystack.length) return -1;
    for (let i = cur; i < cur + needle.length; i++) {
      if (haystack[i] !== needle[i - cur]) {
        flag = false;
        break;
      }
    }
    if (flag) return cur;
    cur++;
  }
};
console.log(strStr("aabaaabaaac", "aabaaac"));
