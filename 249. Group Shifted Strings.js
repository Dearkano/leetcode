/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function (strings) {
  const map = new Map();
  for (const s of strings) {
    const len = s.length;
    const base = s.charCodeAt(0);
    const arr = [];
    for (let i = 0; i < len; i++) {
      let offset = s.charCodeAt(i) - base;
      if (offset < 0) offset += 26;
      arr.push(offset);
    }
    const key = `${len}:${arr.join("-")}`;
    if (!map.get(key)) map.set(key, []);
    map.get(key).push(s);
  }
  const arr = [];
  for (const pair of map) {
    arr.push(pair[1]);
  }
  return arr;
};
