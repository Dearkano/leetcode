/**
 * @param {number[]} pid
 * @param {number[]} ppid
 * @param {number} kill
 * @return {number[]}
 */
var killProcess = function (pid, ppid, kill) {
  const adj = [];
  for (let i = 0; i < ppid.length; i++) {
    if (!adj[ppid[i]]) adj[ppid[i]] = [];
    adj[ppid[i]].push(pid[i]);
  }
  const ans = [];
  const queue = [];
  let idx = 0;
  queue.push(kill);
  while (idx < queue.length) {
    const cur = queue[idx++];
    ans.push(cur);
    if (Array.isArray(adj[cur])) for (const p of adj[cur]) queue.push(p);
  }
  return ans;
};
