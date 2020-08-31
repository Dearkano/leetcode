/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  if (nums.length === 0) return "";
  nums = nums.sort((a, b) => {
    const s1 = `${a}${b}`;
    const s2 = `${b}${a}`;
    return s1 < s2 ? 1 : -1;
  });
  const ans = nums.join("");
  if (ans[0] === "0") return "0";
  return ans;
};
console.log(largestNumber([3, 30, 34, 5, 9]));
