/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
  tiles = tiles
    .split("")
    .sort((a, b) => (a < b ? -1 : 1))
    .join("");
  let ans = 0;
  for (let i = 1; i <= tiles.length; i++) {
    ans += getPermutions(tiles, i);
  }
  return ans;
};

const getPermutions = (s, k) => {
  let ans = 0;
  const visited = [];
  const dfs = (path) => {
    if (path.length === k) {
      ans++;
      return;
    }

    for (let i = 0; i < s.length; i++) {
      if (!visited[i]) {
        if (i > 0 && s[i] === s[i - 1] && !visited[i - 1]) continue;
        path.push(s[i]);
        visited[i] = true;
        dfs(path);
        visited[i] = false;
        path.pop();
      }
    }
  };
  dfs([]);
  return ans;
};
