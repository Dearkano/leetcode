const solution = (s, k) => {
  const set = new Set();
  let cur = "";
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (cur.includes(char)) {
      const pre = cur.indexOf(char);
      cur = cur.substring(pre + 1);
    } else if (cur.length === k) {
      cur = cur.substring(1);
    }
    cur = cur + char;
    if (cur.length === k && !set.has(cur)) {
      set.add(cur);
    }
  }
  const ans = [...set];
  return ans;
};

console.log(solution("awaglknagawunagwkwagl", 4));
