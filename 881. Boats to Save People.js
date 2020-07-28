/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  people.sort((a, b) => a - b);
  let ans = 0;
  let l = 0;
  let r = people.length - 1;
  while (l <= r) {
    while (l < r) {
      if (people[l] + people[r] > limit) {
        ans++;
        r--;
      } else break;
    }
    ans++;
    l++;
    r--;
  }
  if (l === r) ans++;
  return ans;
};

console.log(numRescueBoats([3, 2, 2, 1], 3));
