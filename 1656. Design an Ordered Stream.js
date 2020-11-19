/**
 * @param {number} n
 */
var OrderedStream = function (n) {
  this.map = new Map();
  this.ptr = 1;
};

/**
 * @param {number} id
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (id, value) {
  this.map.set(id, value);
  const arr = [];
  while (this.map.get(this.ptr) !== undefined) {
    arr.push(this.map.get(this.ptr));
    this.ptr++;
  }
  return arr;
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(id,value)
 */
