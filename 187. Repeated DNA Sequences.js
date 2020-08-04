/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  const seen = new Set();
  const repeated = new Set()
  for (let i = 0; i < s.length - 9; i++) {
    const substring = s.substr(i, 10);
    if (!seen.has(substring)) seen.add(substring, 0);
    else repeated.add(substring)
  }
  return [...repeated];
};
console.log(findRepeatedDnaSequences("AAAAAAAAAAA"));
