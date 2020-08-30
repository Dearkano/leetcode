/**
 * @param {number[]} arr
 * @return {number}
 */
var mctFromLeafValues = function (arr) {
  let ans = 0;
  let stack = [Infinity];
  for (const n of arr) {
    while (stack[stack.length - 1] <= n) {
      const cur = stack.pop();
      const neighbor = Math.min(stack[stack.length - 1], n);
      ans += cur * neighbor;
    }
    stack.push(n);
  }
  stack.shift();
  while (stack.length > 1) {
    ans += stack.pop() * stack[stack.length-1]
  }
  return ans
};
console.log(mctFromLeafValues([6, 2, 4]));
