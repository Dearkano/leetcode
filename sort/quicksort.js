const quicksort = (A) => {
  const swap = (i, j) => {
    const temp = A[i];
    A[i] = A[j];
    A[j] = temp;
  };
  const qsort = (l, r) => {
    if (l >= r) return;
    let p = l - 1;
    for (let i = l; i <= r; i++) {
      if (A[i] <= A[r]) {
        p++;
        swap(i, p);
      }
    }
    qsort(l, p - 1);
    qsort(p + 1, r);
  };
  qsort(0, A.length - 1);
  return A;
};

console.log(quicksort([7, 6, 5, 4, 3, 2, 1]));
