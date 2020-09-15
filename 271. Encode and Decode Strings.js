/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function (strs) {
  if (strs.length === 0) return "";
  let s = "";
  const cs = [];
  for (const str of strs) {
    cs.push(str);
  }
  const lens = cs.map((str) => str.length).join("-");
  s += `${lens.length},${lens}`;
  s += cs.join("");
  return s;
};

const compress = (s) => {
  if (s.length === 0) return "";
  let ans = s[0];
  let i = 1;
  let count = 1;
  while (i < s.length) {
    while (s[i] === s[i - 1]) {
      count++;
      i++;
    }
    if (count > 1) ans += count;
    if (i < s.length) ans += s[i];
    count = 1;
    i++;
  }
  return ans;
};

const decompress = (s) => {
  if (!s) return "";
  let ans = "";
  let i = 0;
  while (i < s.length) {
    const c = s[i];
    let count = 0;
    while (i + 1 < s.length && !isNaN(Number(s[i + 1]))) {
      count = count * 10 + Number(s[i + 1]);
      i++;
    }
    if (count === 0) count = 1;
    for (let j = 0; j < count; j++) ans += c;
    i++;
  }
  return ans;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function (s) {
  if (!s) return [];
  let len = 0;
  let i = 0;
  while (s[i] !== ",") {
    len = len * 10 + Number(s[i]);
    i++;
  }
  const lens = s
    .substr(i + 1, len)
    .split("-")
    .map((i) => Number(i));

  const ans = [];
  let start = i + len + 1;
  for (const l of lens) {
    const str = s.substr(start, l);
    start += l;
    ans.push(str);
  }
  return ans;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
