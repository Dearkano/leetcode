/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function (size) {
  this.data = new Array(size).fill(0);
  this.sum = 0;
  this.size = size;
  this.curSize = 0;
  this.idx = 0;
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
  this.idx++;
  const index = this.idx % this.size;
  this.sum = this.sum - this.data[index] + val;
  this.data[index] = val;
  if (this.curSize < this.size) this.curSize++;
  return this.sum / this.curSize;
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
