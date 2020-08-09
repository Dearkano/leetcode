/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function (barcodes) {
  const map = new Map();
  for (let i = 0; i < barcodes.length; i++) {
    if (!map.get(barcodes[i])) map.set(barcodes[i], 0);
    map.set(barcodes[i], map.get(barcodes[i]) + 1);
  }

  const arr = [...map];
  arr.sort((a, b) => b[1] - a[1]);

  const ans = [];
  let idx = 0;
  for (let i = 0; i < arr.length; i++) {
    let count = arr[i][1];
    const barcode = arr[i][0];
    while (count > 0) {
      ans[idx] = barcode;
      idx += 2;
      count--;
      if (idx >= barcodes.length) {
        idx = 1;
      }
    }
  }
  return ans;
};
console.log(rearrangeBarcodes([1, 1, 1, 2, 2, 2]));
