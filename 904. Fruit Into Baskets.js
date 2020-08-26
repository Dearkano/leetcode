/**
 * @param {number[]} tree
 * @return {number}
 */
var totalFruit = function (tree) {
  let ans = 0;
  let f1 = -1;
  let f2 = -1;
  for (let r = 0, l = 0; r < tree.length; r++) {
    if ((f1 >= 0 && f1 === tree[r]) || (f2 >= 0 && f2 === tree[r])) {
      ans = Math.max(ans, r - l + 1);
    } else if (f1 === -1) {
      f1 = tree[r];
      ans = 1;
    } else if (f2 === -1) {
      f2 = tree[r];
      ans = Math.max(ans, r - l + 1);
    } else {
      const f = tree[r - 1] === f1 ? f2 : f1;
      l = r;
      while (tree[l - 1] !== f) l--;
      f1 = tree[r - 1];
      f2 = tree[r];
    }
  }
  return ans;
};
console.log(totalFruit([1, 1, 6, 5, 6, 6, 1, 1, 1, 1]));
console.log(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]));
console.log(totalFruit([1, 2, 1]));
console.log(totalFruit([0, 1, 2, 2]));
console.log(totalFruit([1, 2, 3, 2, 2]));
