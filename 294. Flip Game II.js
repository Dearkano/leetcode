/**
 * @param {string} s
 * @return {boolean}
 */
var canWin = function (s) {
  const board = s.split("");
  const dfs = () => {
    for (let i = 0; i < board.length - 1; i++) {
      if (board[i] === "+" && board[i + 1] === "+") {
        board[i] = "-";
        board[i + 1] = "-";
        const res = !dfs();
        board[i] = "+";
        board[i + 1] = "+";
        if (res) return true;
      }
    }
    return false;
  };

  return dfs();
};

console.log(canWin("+++++++++"));
