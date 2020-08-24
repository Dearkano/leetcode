/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  const pStack = [];
  const hStack = [];
  let pos = 0;
  let ans = 0;
  let tempPos = 0;
  let tempH = 0;
  const pop = () => {
    tempPos = pStack.pop();
    tempH = hStack.pop();
    ans = Math.max(ans, (pos - tempPos) * tempH);
  };
  for (pos = 0; pos < heights.length; pos++) {
    const cur = heights[pos];
    if (pStack.length > 0 && cur === hStack[hStack.length - 1]) continue;

    if (pStack.length === 0 || cur < hStack[hStack.length - 1]) {
      while (pStack.length > 0 && cur < hStack[hStack.length - 1]) pop();
      pStack.push(tempPos);
      hStack.push(cur);
    } else {
      pStack.push(pos);
      hStack.push(cur);
    }
  }
  while (pStack.length > 0) pop();
  return ans;
};
