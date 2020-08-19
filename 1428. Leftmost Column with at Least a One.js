/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} row, col
 *     @return {integer}
 *     this.get = function(row, col) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
var leftMostColumnWithOne = function (binaryMatrix) {
  const [m, n] = binaryMatrix.dimensions();
  let r = 0;
  let c = n - 1;
  while (r < m && c >= 0) {
    if (binaryMatrix.get(r, c) === 0) {
      r++;
    } else {
      c--;
    }
  }
  return c === n - 1 ? -1 : c + 1;
};
