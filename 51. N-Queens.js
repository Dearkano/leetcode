/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const ans = [];

  const check = (c, path) => {
    const r = path.length;
    for (let i = 0; i < path.length; i++) {
      if (path[i] === c || r - i === c - path[i] || r - i === path[i] - c)
        return false;
    }
    return true;
  };

  const dfs = (path) => {
    if (path.length === n) {
      ans.push([].concat(path));
      return;
    }

    for (let i = 0; i < n; i++) {
      if (check(i, path)) {
        path.push(i);
        dfs(path);
        path.pop();
      }
    }
  };

  dfs([]);
  const boards = [];
  for (const path of ans) {
    const board = [];
    for (let i = 0; i < n; i++) {
      board[i] = "";
      for (let j = 0; j < n; j++) {
        board[i] += path[i] === j ? "Q" : ".";
      }
    }
    boards.push(board);
  }
  return boards;
};
console.log(solveNQueens(4));
