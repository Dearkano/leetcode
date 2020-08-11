/**
 * Initialize your data structure here.
 */
var TwoSum = function () {
  this.map = new Map();
};

/**
 * Add the number to an internal data structure..
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function (number) {
  if (!this.map.get(number)) this.map.set(number, 0);
  this.map.set(number, this.map.get(number) + 1);
};

/**
 * Find if there exists any pair of numbers which sum is equal to the value.
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function (value) {
  for (const pair of this.map) {
    if (
      this.map.get(value - pair[0]) &&
      (pair[0] !== value - pair[0] ||
        (pair[0] === value - pair[0] && pair[1] > 1))
    )
      return true;
  }
  return false;
};

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */
