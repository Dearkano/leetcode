/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function (grid) {
  // use the map the store the point info
  // we split every point in to 4 areas
  // top: 0, right: 1, bottom: 2, left: 3
  // principle:
  // if the point is not at edge(i=0 or j=0), then the area(i-1, j)'s right part must be connected to
  // area(x, y)'s left part
  // if there is '/', then left top, and right bottom are connected
  const map = [];
  const n = grid.length;
  let count = n * n * 4;
  for (let i = 0; i < count; i++) map[i] = i;
  const union = (a, b) => {
    // check if area a and area b are connected
    a = find(a);
    b = find(b);
    // connect the 2 areas
    if (a != b) {
      map[a] = b;
      count--;
    }
  };

  // get the area number of area x
  const find = (x) => {
    if (x === map[x]) return x;
    else return find(map[x]);
  };

  // get the point's location in the array
  const g = (i, j, k) => (i * n + j) * 4 + k;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i > 0) {
        // connect this area's top and the top one's bottom
        union(g(i, j, 0), g(i - 1, j, 2));
      }
      if (j > 0) {
        // connect this area's left and the left one's right
        union(g(i, j, 3), g(i, j - 1, 1));
      }
      if (grid[i][j] !== "/") {
        // connect the top and right, left and bottom
        union(g(i, j, 0), g(i, j, 1));
        union(g(i, j, 2), g(i, j, 3));
      }
      if (grid[i][j] !== "\\") {
        //connect the top and left, right and bottom
        union(g(i, j, 0), g(i, j, 3));
        union(g(i, j, 1), g(i, j, 2));
      }
    }
  }
  return count;
};
