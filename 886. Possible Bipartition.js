/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function (N, dislikes) {
  const map = [];
  // the final partition, No group = -1, group A = 0, group B = 1
  const ans = [];
  for (let i = 1; i <= N; i++) {
    map[i] = [];
    ans[i] = -1;
  }
  // concat the dislikes
  for (const item of dislikes) {
    const a = item[0];
    const b = item[1];
    if (!map[a].includes(b)) map[a].push(b);
    if (!map[b].includes(a)) map[b].push(a);
  }
  var dfs = (cur, curGroup) => {
    // agree with previous calculations
    if (ans[cur] === curGroup) return true;
    // contradict with previous calculations
    if (ans[cur] === 1 - curGroup) return false;
    // ans[cur] === -1, this point is in its first calculation
    ans[cur] = curGroup
    // verify if every disliked point can be legally set in another group
    for (const point of map[cur]) {
      if (!dfs(point, 1 - curGroup)) return false;
    }
    return true;
  };

  for (let i = 1; i <= N; i++) {
    // if the point is not in any of the groups, try group A
    if (ans[i] === -1 && !dfs(i, 0)) return false;
  }
  return true;
};

console.log(
  possibleBipartition(4, [
    [1, 2],
    [1, 3],
    [2, 4],
  ])
);
