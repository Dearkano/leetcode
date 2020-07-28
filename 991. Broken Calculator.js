/**
 * @param {number} X
 * @param {number} Y
 * @return {number}
 */
const brokenCalc = function (X, Y) {
  let ans = 0;
  while (X !== Y) {
    if (Y % 2 === 0 && Y > X) Y /= 2;
    else if (Y % 2 !== 0 && Y > X) Y += 1;
    else {
      ans += X - Y;
      break;
    }
    ans++;
  }
  return ans;
};

const brokenCalc = (X, Y) => {
  if (Y <= X) return X - Y;
  return Y % 2 === 0 ? brokenCalc(X, Y / 2) + 1 : brokenCalc(X, Y + 1) + 1;
};
console.log(brokenCalc(1, 1000000000));
