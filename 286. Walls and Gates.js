/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function (rooms) {
  const m = rooms.length;
  if (m === 0) return;
  const n = rooms[0].length;
  const queue = [];
  let idx = 0;
  const INF = 2 ** 31;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (rooms[i][j] === 0) {
        queue.push({ i, j });
      }
    }
  }
  while (idx < queue.length) {
    const { i, j } = queue[idx++];
    if (j > 0 && rooms[i][j - 1] < INF && rooms[i][j - 1] > rooms[i][j] + 1) {
      rooms[i][j - 1] = Math.min(rooms[i][j] + 1, rooms[i][j - 1]);
      queue.push({ i, j: j - 1 });
    }
    if (
      j < n - 1 &&
      rooms[i][j + 1] < INF &&
      rooms[i][j + 1] > rooms[i][j] + 1
    ) {
      rooms[i][j + 1] = Math.min(rooms[i][j] + 1, rooms[i][j + 1]);
      queue.push({ i, j: j + 1 });
    }
    if (i > 0 && rooms[i - 1][j] < INF && rooms[i - 1][j] > rooms[i][j] + 1) {
      rooms[i - 1][j] = Math.min(rooms[i][j] + 1, rooms[i - 1][j]);
      queue.push({ i: i - 1, j });
    }
    if (
      i < m - 1 &&
      rooms[i + 1][j] < INF &&
      rooms[i + 1][j] > rooms[i][j] + 1
    ) {
      rooms[i + 1][j] = Math.min(rooms[i][j] + 1, rooms[i + 1][j]);
      queue.push({ i: i + 1, j });
    }
  }
};
