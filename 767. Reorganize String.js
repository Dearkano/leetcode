/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function (S) {
  const arr = S.split("")
    .map((i) => i.charCodeAt(0))
    .sort((a, b) => a - b);
  const swap = (i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };
  const count = [];
  for (const i of arr) {
    if (!count[i]) count[i] = 0;
    count[i]++;
  }
  const getNext = (i) => {
    let max = 0;
    let ans = -1;
    for (j = i + 1; j < arr.length; j++) {
      if (max < count[arr[j]] && arr[i] !== arr[j]) {
        max = count[arr[j]];
        ans = j;
      }
    }
    return ans;
  };
  for (let i = -1; i < arr.length - 1; i++) {
    const next = getNext(i);
    if (next !== -1) {
      swap(i + 1, next);
      count[arr[i + 1]]--;
    } else return "";
  }
  return arr.map((i) => String.fromCharCode(i)).join("");
};

console.log(reorganizeString("aab"));
