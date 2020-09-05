/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
  const count = new Array(nums.length).fill(0);
  const A = [];
  nums.forEach((v, i) => {
    A.push({ v, i });
  });
  const mergesort = () => {
    const msort = (l, r) => {
      if (l >= r) return;
      const mid = Math.floor((l + r) / 2);
      msort(l, mid);
      msort(mid + 1, r);
      if (A[mid].v > A[mid + 1].v) merge(l, mid, mid + 1, r);
    };
    const merge = (l1, r1, l2, r2) => {
      const l = l1;
      const ll = l2
      const arr = A.slice(l1, r2 + 1);
      for (let i = l; i <= r2; i++) {
        if (l1 > r1) {
          A[i] = arr[l2 - l];
          l2++;
        } else if (l2 > r2 || arr[l1 - l].v <= arr[l2 - l].v) {
          A[i] = arr[l1 - l];
          count[arr[l1 - l].i] += l2 - ll;
          l1++;
        } else {
          A[i] = arr[l2 - l];
          l2++;
        }
      }
    };
    msort(0, A.length - 1);
  };
  mergesort();
  return count;
};
console.log(countSmaller([5, 2, 6, 1]));
