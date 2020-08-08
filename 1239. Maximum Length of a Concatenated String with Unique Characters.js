/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
  let max = 0;

  const dfs = (start, cur) => {
    max = Math.max(max, cur.length);
    if (start === arr.length) {
      return;
    }

    for (let i = start; i < arr.length; i++) {
      if (isValid(cur, arr[i]) && isValid(arr[i])) {
        dfs(i + 1, cur + arr[i]);
      }
    }
  };
  dfs(0, "");
  return max;
};

const isValid = (s1, s2) => {
  if (!s2) {
    const set = new Set();
    for (let i = 0; i < s1.length; i++) {
      if (!set.has(s1[i])) set.add(s1[i]);
      else return false;
    }
    return true;
  }
  for (let i = 0; i < s1.length; i++) {
    if (s2.indexOf(s1[i]) !== -1) return false;
  }
  return true;
};
