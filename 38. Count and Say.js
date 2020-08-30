/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n === 1) return "1";

  const pre = countAndSay(n - 1);
  let count = 1;
  let c = pre[0];
  let ans = "";
  for (let i = 1; i < pre.length; i++) {
    if (pre[i] === c) count++;
    else {
      ans += count;
      ans += c;
      c = pre[i];
      count = 1;
    }
  }
  ans += count;
  ans += c;
  return ans;
};

for (let i = 1; i < 8; i++) {
  console.log(countAndSay(i));
}
