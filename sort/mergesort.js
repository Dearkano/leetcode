const mergeSort = (A) => {
  const mSort = (l, r) => {
    if (l >= r) return;
    const mid = Math.floor((r + l) / 2);
    mSort(l, mid);
    mSort(mid + 1, r);
    if (A[mid] > A[mid + 1]) merge(l, mid, mid + 1, r);
  };
  const merge = (l1, r1, l2, r2) => {
    const temp = A.slice(l1, r2 + 1);
    const l = l1;
    for (let i = l1; i <= r2; i++) {
      if (l1 > r1) {
        A[i] = temp[l2 - l];
        l2++;
      } else if (l2 > r2) {
        A[i] = temp[l1 - l];
        l1++;
      } else if (temp[l1] < temp[l2]) {
        A[i] = temp[l1 - l];
        l1++;
      } else {
        A[i] = temp[l2 - l];
        l2++;
      }
    }
  };
  mSort(0, A.length - 1);
  return A;
};

console.log(mergeSort([7,6,4,3,2,1,1,1,1,0]));
