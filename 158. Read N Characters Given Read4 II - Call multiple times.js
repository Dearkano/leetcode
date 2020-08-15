/**
 * Definition for read4()
 *
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf4) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function (read4) {
  let bufPtr = 0;
  let bufCnt = 0;
  let buf4 = [];
  /**
   * @param {character[]} buf Destination buffer
   * @param {number} n Number of characters to read
   * @return {number} The number of actual characters read
   */
  return function (buf, n) {
    let ptr = 0;
    while (ptr < n) {
      if (bufPtr === 0) {
        bufCnt = read4(buf4);
      }
      if (bufCnt === 0) break;
      while (ptr < n && bufPtr < bufCnt) {
        buf[ptr++] = buf4[bufPtr++];
      }
      if (bufPtr === bufCnt) bufPtr = 0;
    }
    return ptr;
  };
};
