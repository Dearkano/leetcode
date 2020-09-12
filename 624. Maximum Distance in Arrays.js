/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function (arrays) {
  const n = arrays.length;
  let idx1 = -1;
  let idx2 = -1;
  let idx3 = -1;
  let idx4 = -1;
  for (let i = 0; i < n; i++) {
    if (
      idx1 === -1 ||
      arrays[idx1][arrays[idx1].length - 1] <= arrays[i][arrays[i].length - 1]
    ) {
      idx2 = idx1;
      idx1 = i;
    } else if (
      idx2 === -1 ||
      arrays[idx2][arrays[idx2].length - 1] < arrays[i][arrays[i].length - 1]
    ) {
      idx2 = i;
    }
    if (idx3 === -1 || arrays[idx3][0] >= arrays[i][0]) {
      idx4 = idx3;
      idx3 = i;
    } else if (idx4 === -1 || arrays[idx4][0] > arrays[i][0]) {
      idx4 = i;
    }
  }
  if (idx1 !== idx3)
    return arrays[idx1][arrays[idx1].length - 1] - arrays[idx3][0];
  else
    return Math.max(
      arrays[idx1][arrays[idx1].length - 1] - arrays[idx4][0],
      arrays[idx2][arrays[idx2].length - 1] - arrays[idx3][0]
    );
};
