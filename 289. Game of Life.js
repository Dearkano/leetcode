/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  const m = board.length;
  if (m === 0) return;
  const n = board[0].length;
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let count = 0;
      for (const dir of dirs) {
        const x = i + dir[0];
        const y = j + dir[1];
        if (x >= 0 && y >= 0 && x < m && y < n && board[x][y] > 0) {
          count++;
        }
      }
      if (board[i][j] > 0 && (count < 2 || count > 3)) {
        board[i][j] = 2;
      } else if (board[i][j] <= 0 && count === 3) {
        board[i][j] = -1;
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 2) board[i][j] = 0;
      else if (board[i][j] === -1) board[i][j] = 1;
    }
  }
};
