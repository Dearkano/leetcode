/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
// var findWords = function (board, words) {
//   const m = board.length;
//   if (m === 0) return [];
//   const n = board[0].length;
//   const visited = [];
//   for (let i = 0; i < m; i++) visited[i] = new Array(n).fill(false);
//   const ans = [];
//   const dirs = [
//     [0, 1],
//     [0, -1],
//     [1, 0],
//     [-1, 0],
//   ];
//   const dfs = (w, i, j, k) => {
//     if (k === w.length) {
//       ans.push(w);
//       return;
//     }
//     for (const dir of dirs) {
//       const x = i + dir[0];
//       const y = j + dir[1];
//       if (
//         x >= 0 &&
//         y >= 0 &&
//         x < m &&
//         y < n &&
//         w[k] === board[x][y] &&
//         !visited[x][y]
//       ) {
//         visited[x][y] = true;
//         dfs(w, x, y, k + 1);
//         visited[x][y] = false;
//         if (ans.includes(w)) {
//           next = true;
//           break;
//         }
//       }
//     }
//   };
//   for (const w of words) {
//     let next = false;
//     for (let i = 0; i < m; i++) {
//       for (let j = 0; j < n; j++) {
//         if (board[i][j] === w[0]) {
//           visited[i][j] = true;
//           dfs(w, i, j, 1);
//           visited[i][j] = false;
//           if (ans.includes(w)) {
//             next = true;
//             break;
//           }
//         }
//       }
//       if (next) break;
//     }
//   }
//   return ans;
// };

const findWords = (board, words) => {
  const m = board.length;
  const n = board[0].length;
  const root = buildTrie(words);
  const ans = [];
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const dfs = (i, j, node) => {
    const temp = board[i][j];
    if (temp === "#" || !node.next[temp.charCodeAt(0) - 97]) return;
    node = node.next[temp.charCodeAt(0) - 97];
    if (node.word) {
      ans.push(node.word);
      node.word = null;
    }
    board[i][j] = "#";
    for (const dir of dirs) {
      const x = i + dir[0];
      const y = j + dir[1];
      if (x >= 0 && y >= 0 && x < m && y < n) {
        dfs(x, y, node);
      }
    }
    board[i][j] = temp;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dfs(i, j, root);
    }
  }
  return ans;
};

const TrieNode = function () {
  this.next = [];
  this.word = null;
};

const buildTrie = (words) => {
  const root = new TrieNode();
  for (const w of words) {
    let node = root;
    for (let i = 0; i < w.length; i++) {
      if (!node.next[w.charCodeAt(i) - 97]) {
        node.next[w.charCodeAt(i) - 97] = new TrieNode();
        node = node.next[w.charCodeAt(i) - 97];
      } else {
        node = node.next[w.charCodeAt(i) - 97];
      }
      if (i === w.length - 1) node.word = w;
    }
  }
  return root;
};

console.log(
  findWords(
    [
      ["a", "b"],
      ["a", "a"],
    ],
    ["aba", "baa", "bab", "aaab", "aaa", "aaaa", "aaba"]
  )
);
