/**
 * @param {number} N
 * @return {number}
 */
var countArrangement = function (N) {
  let ans = 0;
  const visited = [];
  for (let i = 1; i <= N; i++) visited[i] = false;
  const dfs = (path) => {
    if (path.length === N) {
      ans++
      return;
    }
    for (let i = 1; i <= N; i++) {
      if (
        !visited[i] &&
        ((path.length + 1) % i === 0 || i % (path.length + 1) === 0)
      ) {
        path.push(i);
        visited[i] = true;
        dfs(path);
        path.pop();
        visited[i] = false;
      }
    }
  };
  dfs([]);
  return ans;
};

console.log(countArrangement(4));
