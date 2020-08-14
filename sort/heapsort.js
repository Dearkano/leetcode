const heapSort = (A) => {
  const swap = (i, j) => {
    const temp = A[i];
    A[i] = A[j];
    A[j] = temp;
  };
  const adjustHeap = (i, len) => {
    for (let j = 2 * i + 1; j < len; j = 2 * j + 1) {
      if (j + 1 < len && A[j] < A[j + 1]) j++;
      if (A[i] < A[j]) {
        swap(i, j);
        i = j;
      } else break;
    }
  };
  for (let i = Math.floor(A.length / 2) - 1; i >= 0; i--) {
    adjustHeap(i, A.length);
  }
  for (let i = A.length - 1; i > 0; i--) {
    swap(0, i);
    adjustHeap(0, i);
  }
  return A;
};

console.log(heapSort([5, 6, 1, 7, 2, 3, 4]));
