/**
 * @param {number[][]} v
 */
var Vector2D = function (v) {
  this.col = 0;
  this.row = 0;
  this.v = v;
};

/**
 * @return {number}
 */
Vector2D.prototype.next = function () {
  while (this.col === this.v[this.row].length) {
    this.row++;
    this.col = 0;
  }
  const ans = this.v[this.row][this.col];
  this.col++;
  while (this.row < this.v.length && this.col === this.v[this.row].length) {
    this.row++;
    this.col = 0;
  }
  return ans;
};

/**
 * @return {boolean}
 */
Vector2D.prototype.hasNext = function () {
  while (this.row < this.v.length && this.col === this.v[this.row].length) {
    this.row++;
    this.col = 0;
  }
  return this.row < this.v.length && this.col < this.v[this.row].length;
};

/**
 * Your Vector2D object will be instantiated and called as such:
 * var obj = new Vector2D(v)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
