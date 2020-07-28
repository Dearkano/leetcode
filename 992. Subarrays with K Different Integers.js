/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysWithKDistinct = function (A, K) {
  return atMostK(A, K) - atMostK(A, K - 1);
};

// it's hard to count the substring with exact K distinct chars
// but it's easier to count the substring with at most K distinct chars
const atMostK = (A, K) => {
  if (K === 0) return 0;
  const map = new Map();
  let l = 0;
  let ans = 0;
  for (let r = 0; r < A.length; r++) {
    if (!map.get(A[r])) {
      map.set(A[r], 0);
      K--;
    }
    // if distinct number > K
    while (K < 0) {
      map.set(A[l], map.get(A[l]) - 1);
      if (map.get(A[l]) === 0) K++;
      l++;
    }
    map.set(A[r], map.get(A[r]) + 1);
    // eg: [1, 2, 3, 4]: [1] [1, 2] [1, 2, 3] [1, 2, 3, 4] r - l + 1
    ans += r - l + 1;
  }
  return ans;
};
console.log(subarraysWithKDistinct([1, 2], 1));
