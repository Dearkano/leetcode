/**
 * @param {number[]} arr
 * @return {number}
 */
const maximumSum = function (arr) {
  let ans = arr[0];
  let s1 = arr[0];
  let s2 = arr[0] > 0 ? arr[0] : 0;
  for (let i = 1; i < arr.length; i++) {
    s2 = s1 > s2 + arr[i] ? s1 : s2 + arr[i];
    if (s2 > ans) ans = s2;
    s1 = arr[i] > s1 + arr[i] ? arr[i] : s1 + arr[i];
    if (s1 > ans) ans = s1;
  }
  return ans;
};

maximumSum([1,2, -2, 3]);
maximumSum([2,3,1,4])
