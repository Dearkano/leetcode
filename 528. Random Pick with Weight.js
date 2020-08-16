/**
 * @param {number[]} w
 */
var Solution = function (w) {
  this.sum = [];
  for (let i = 0; i < w.length; i++) {
    this.sum.push(
      this.sum.length === 0 ? w[i] + 0 : w[i] + this.sum[this.sum.length - 1]
    );
  }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  const rand = Math.random() * this.sum[this.sum.length - 1];
  for (let i = 0; i < this.sum.length; i++) {
    if (rand < this.sum[i]) return i;
  }
  return this.sum.length - 1;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */

const s = new Solution([1, 3]);
console.log(s.pickIndex());
console.log(s.pickIndex());
console.log(s.pickIndex());
console.log(s.pickIndex());
console.log(s.pickIndex());
console.log(s.pickIndex());
console.log(s.pickIndex());
console.log(s.pickIndex());
console.log(s.pickIndex());
