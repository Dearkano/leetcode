/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSumInverse = function (nestedList) {
  console.log(nestedList);
  if (typeof nestedList !== "object") return nestedList;
  const map = new Map();
  let min = Infinity;
  const getSum = (list, depth) => {
    if (depth < min) min = depth;
    if (!map.get(depth)) map.set(depth, []);
    const arr = map.get(depth);
    for (const item of list) {
      if (item.isInteger()) {
        arr.push(item.getInteger());
      } else {
        getSum(item.getList(), depth - 1);
      }
    }
    map.set(depth, arr);
  };
  getSum(nestedList, 0);
  let ans = 0;
  for (let i = min; i <= 0; i++) {
    const arr = map.get(i);
    for (const item of arr) {
      ans += item * (i - min + 1);
    }
  }
  return ans;
};

console.log(depthSumInverse([[1, 1], 2, [1, 1]]));
