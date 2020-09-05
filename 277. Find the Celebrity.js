/**
 * Definition for knows()
 *
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
var solution = function (knows) {
  /**
   * @param {integer} n Total people
   * @return {integer} The celebrity
   */
  return function (n) {
    let ans = 0;
    for (let i = 1; i < n; i++) {
      if (knows(ans, i)) {
        ans = i;
      }
    }
    for (let i = 0; i < n; i++) {
      if (i < ans) {
        if (!(knows(i, ans) && !knows(ans, i))) return -1;
      } else {
        if (!knows(i, ans)) return -1;
      }
    }
    return ans;
  };
};
