/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const m = board.length;
  const n = board[0].length;
  const visited = [];
  for (let i = 0; i < m; i++) visited[i] = [];
  const dfs = (i, j, k) => {
    if (k === word.length) return true;
    visited[i][j] = true;
    if (
      i > 0 &&
      board[i - 1][j] === word[k] &&
      !visited[i - 1][j] &&
      dfs(i - 1, j, k + 1)
    )
      return true;
    if (
      j > 0 &&
      board[i][j - 1] === word[k] &&
      !visited[i][j - 1] &&
      dfs(i, j - 1, k + 1)
    )
      return true;
    if (
      i < m - 1 &&
      board[i + 1][j] === word[k] &&
      !visited[i + 1][j] &&
      dfs(i + 1, j, k + 1)
    )
      return true;
    if (
      j < n - 1 &&
      board[i][j + 1] === word[k] &&
      !visited[i][j + 1] &&
      dfs(i, j + 1, k + 1)
    )
      return true;
    visited[i][j] = false;
    return false;
  };
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[0]) {
        if (dfs(i, j, 1)) return true;
      }
    }
  }
  return false;
};
