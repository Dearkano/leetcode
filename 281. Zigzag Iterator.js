/**
 * @constructor
 * @param {Integer[]} v1
 * @param {Integer[]} v1
 */
var ZigzagIterator = function ZigzagIterator(v1, v2) {
  this.cnt = 0;
  this.data = [];
  this.cur = 0;
  const vectors = [v1, v2];
  this.indices = new Array(vectors.length).fill(0);
  for (const v of vectors) {
    if (v.length > 0) this.cnt++;
    this.data.push(v);
  }
};

/**
 * @this ZigzagIterator
 * @returns {boolean}
 */
ZigzagIterator.prototype.hasNext = function hasNext() {
  return this.cnt > 0;
};

/**
 * @this ZigzagIterator
 * @returns {integer}
 */
ZigzagIterator.prototype.next = function next() {
  while (this.indices[this.cur] === this.data[this.cur].length)
    this.cur = (this.cur + 1) % this.data.length;
  const num = this.data[this.cur][this.indices[this.cur]++];
  if (this.indices[this.cur] === this.data[this.cur].length) this.cnt--;
  this.cur = (this.cur + 1) % this.data.length;
  return num;
};

/**
 * Your ZigzagIterator will be called like this:
 * var i = new ZigzagIterator(v1, v2), a = [];
 * while (i.hasNext()) a.push(i.next());
 */
