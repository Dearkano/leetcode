/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const row = new Set();
  const col = new Set();
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      // row
      if (board[i][j] !== ".") {
        if (!row.has(board[i][j])) row.add(board[i][j]);
        else return false;
      }
      // col
      if (board[j][i] !== ".") {
        if (!col.has(board[j][i])) col.add(board[j][i]);
        else return false;
      }
    }
    row.clear();
    col.clear();
  }

  const offsets = [
    [0, 0],
    [0, 3],
    [0, 6],
    [3, 0],
    [3, 3],
    [3, 6],
    [6, 0],
    [6, 3],
    [6, 6],
  ];
  const set = new Set();
  for (const offset of offsets) {
    const [x, y] = offset;
    for (let i = 0 + x; i < 3 + x; i++) {
      for (let j = 0 + y; j < 3 + y; j++) {
        if (board[i][j] !== ".") {
          if (!set.has(board[i][j])) set.add(board[i][j]);
          else return false;
        }
      }
    }
    set.clear();
  }
  return true;
};

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
