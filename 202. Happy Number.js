/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let slow = n;
  let fast = n;
  do {
    slow = cal(slow);
    fast = cal(fast);
    fast = cal(fast);
    if (fast === 1) return true;
  } while (slow !== fast);
  return false;
};

const cal = (n) => {
  let ans = 0;
  while (n) {
    ans += (n % 10) ** 2;
    n = Math.floor(n / 10);
  }
  return ans;
};
