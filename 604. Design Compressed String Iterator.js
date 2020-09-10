/**
 * @param {string} compressedString
 */
var StringIterator = function (compressedString) {
  this.str = compressedString;
  this.cur = 0;
  this.char = "";
  this.cnt = 0;
};

/**
 * @return {character}
 */
StringIterator.prototype.next = function () {
  if (!this.hasNext()) return " ";
  this.cnt--;
  return this.char;
};

/**
 * @return {boolean}
 */
StringIterator.prototype.hasNext = function () {
  if (this.cur === this.str.length && this.cnt === 0) return false;
  if (this.cnt === 0) {
    if (this.cur === this.str.length) return false;
    this.char = this.str[this.cur];
    let cnt = 0;
    this.cur++;
    while (
      this.cur < this.str.length &&
      this.str.charCodeAt(this.cur) <= 57 &&
      this.str.charCodeAt(this.cur) >= 48
    ) {
      cnt = cnt * 10 + Number(this.str[this.cur]);
      this.cur++;
    }
    this.cnt = cnt || 1;
    return true;
  } else return true;
};

/**
 * Your StringIterator object will be instantiated and called as such:
 * var obj = new StringIterator(compressedString)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
