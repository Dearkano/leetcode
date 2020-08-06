/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (dominoes) {
  // the thought is to find every range of L and R
  // to make the question simple to deal with the start and the end
  // we add L to the start and R to the end, this will not affect the result
  dominoes = "L" + dominoes + "R";
  const ans = [];
  for (let l = 0, r = 1; r < dominoes.length; r++) {
    if (dominoes[r] === ".") continue;
    ans.push(dominoes[l]);
    // eg. index 9 and index 5, there are 3 nodes
    let count = r - l - 1;
    // 1. the same direction  L...L  or R....R
    if (dominoes[l] === dominoes[r]) {
      for (let i = 0; i < count; i++) {
        ans.push(dominoes[l]);
      }
    }
    // 2. L....R, nodes inside are all vertical
    else if (dominoes[l] === "L" && dominoes[r] === "R") {
      for (let i = 0; i < count; i++) {
        ans.push(".");
      }
    }
    // 3. R....L, the first half are R, the second half are L, the middle (if the substring length is odd) is .
    else {
      for (let i = 0; i < Math.floor(count / 2); i++) {
        ans.push("R");
      }
      if (count % 2 === 1) ans.push(".");
      for (let i = 0; i < Math.floor(count / 2); i++) {
        ans.push("L");
      }
    }
    l = r;
  }
  const str = ans.join("");
  return str.substring(1, str.length - 1);
};

console.log(pushDominoes(".L.R...LR..L.."));
