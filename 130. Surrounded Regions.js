/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// var solve = function (board) {
//   const visitedMap = new Map();
//   const m = board.length;
//   if (m === 0) return board;
//   const n = board[0].length;
//   let points = [];
//   const isSurrounded = (i, j) => {
//     if (board[i][j] === "X") return true;
//     if (visitedMap.get(`${i}-${j}`)) return true;
//     if (i === 0 || j === 0 || i === m - 1 || j === n - 1) return false;
//     visitedMap.set(`${i}-${j}`, true);
//     points.push({ i, j });
//     const top = isSurrounded(i - 1, j);
//     const bottom = isSurrounded(i + 1, j);
//     const left = isSurrounded(i, j - 1);
//     const right = isSurrounded(i, j + 1);
//     return top && bottom && left && right;
//   };
//   for (let i = 1; i < m - 1; i++) {
//     for (let j = 1; j < n - 1; j++) {
//       if (!visitedMap.get(`${i}-${j}`) && board[i][j] === "O") {
//         points = [];
//         if (isSurrounded(i, j)) {
//           for (const p of points) board[p.i][p.j] = "X";
//         }
//       }
//     }
//   }
//   return board;
// };

const solve = (board) => {
  const queue = [];
  const m = board.length;
  if (m === 0) return board;
  const n = board[0].length;
  for (let i = 0; i < m; i++) {
    if (board[i][0] === "O") queue.push({ i, j: 0 });
    if (board[i][n - 1] === "O") queue.push({ i, j: n - 1 });
  }
  for (let j = 1; j < n - 1; j++) {
    if (board[0][j] === "O") queue.push({ i: 00, j });
    if (board[m - 1][j] === "O") queue.push({ i: m - 1, j });
  }
  const find = (i, j) => {
    if (i < 0 || i >= m || j < 0 || j >= n) return;
    if (board[i][j] !== "O") return;
    board[i][j] = "+";
    find(i, j + 1);
    find(i, j - 1);
    find(i + 1, j);
    find(i - 1, j);
  };
  while (queue.length > 0) {
    const p = queue.pop();
    find(p.i, p.j);
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === "O") board[i][j] = "X";
      else if (board[i][j] === "+") board[i][j] = "O";
    }
  }
};
console.log(
  solve([
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "X", "X"],
  ])
);
