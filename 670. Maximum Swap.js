/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  const S = num
    .toString()
    .split("")
    .map((i) => Number(i));
  const bucket = [];
  for (let i = 0; i < S.length; i++) {
    bucket[S[i]] = i;
  }
  for (let i = 0; i < S.length; i++) {
    for (let j = 9; j >= 0 && j > S[i]; j--) {
      if (bucket[j] > i) {
        const temp = S[i];
        S[i] = S[bucket[j]];
        S[bucket[j]] = temp;
        return Number(S.join(""));
      }
    }
  }
  return Number(S.join(""));
};
console.log(maximumSwap(98368));
