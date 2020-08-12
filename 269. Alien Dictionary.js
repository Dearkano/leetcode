/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function (words) {
  const edges = new Set();
  const c = new Set();
  const indegree = {};
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (!c.has(words[i][j])) {
        c.add(words[i][j]);
        indegree[words[i][j]] = 0;
      }
    }
  }
  for (let i = 1; i < words.length; i++) {
    const pre = words[i - 1];
    const cur = words[i];
    for (let j = 0; j < Math.min(cur.length, pre.length); j++) {
      if (j === cur.length - 1 && cur[j] === pre[j] && pre.length > cur.length)
        return "";
      if (cur[j] === pre[j]) continue;
      edges.add(`${pre[j]},${cur[j]}`);
      break;
    }
  }
  const adj = {};
  for (const edge of edges) {
    const [a, b] = edge.split(",");
    if (!adj[a]) adj[a] = [];
    adj[a].push(b);
    indegree[b]++;
  }
  const queue = [];
  let idx = 0;
  for (const key in indegree) {
    if (indegree[key] === 0) queue.push(key);
  }
  let ans = "";
  while (idx < queue.length) {
    const cur = queue[idx++];
    ans += cur;
    if (adj[cur]) {
      for (const e of adj[cur]) {
        indegree[e]--;
        if (indegree[e] === 0) queue.push(e);
      }
    }
  }
  return ans.length === c.size ? ans : "";
};

console.log(
  alienOrder([
    "bsusz",
    "rhn",
    "gfbrwec",
    "kuw",
    "qvpxbexnhx",
    "gnp",
    "laxutz",
    "qzxccww",
  ])
);
