/**
 * @param {string} input
 * @return {number[]}
 */
let cache = new Map();

var diffWaysToCompute = function (input) {
  const ans = recursiveCompute(input);
  return ans;
};

const recursiveCompute = (input) => {
  if (cache.get(input)) return cache.get(input);
  const ans = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "+" || input[i] === "-" || input[i] === "*") {
      const op = input[i];
      const left = input.substring(0, i);
      const right = input.substring(i + 1, input.length);
      const leftResult = recursiveCompute(left);
      const rightResult = recursiveCompute(right);
      for (const l of leftResult) {
        for (const r of rightResult) {
          ans.push(cal2(l, r, op));
        }
      }
    }
  }
  if (ans.length === 0) ans.push(Number(input));
  if (!cache.get(input)) cache.set(input, ans);
  return ans;
};

const cal2 = (l, r, op) => {
  switch (op) {
    case "+":
      return l + r;
    case "-":
      return l - r;
    case "*":
      return l * r;
    default:
  }
};

console.log(diffWaysToCompute("2*3-4*5"));
