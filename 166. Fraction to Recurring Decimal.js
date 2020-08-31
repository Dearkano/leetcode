/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {
  const sign =
    (numerator < 0 && denominator > 0) || (numerator > 0 && denominator < 0)
      ? "-"
      : "";
  numerator = Math.abs(numerator);
  denominator = Math.abs(denominator);
  const int = (numerator - (numerator % denominator)) / denominator;

  numerator -= int * denominator;
  if (numerator === 0) return sign + int;
  let fraction = "";
  const map = new Map();
  let isRecur = false;
  while (numerator !== 0) {
    numerator *= 10;
    if (map.get(numerator) !== undefined) {
      isRecur = true;
      break;
    }
    map.set(numerator, fraction.length);
    const temp = (numerator - (numerator % denominator)) / denominator;
    fraction += temp;
    numerator -= temp * denominator;
  }
  if (isRecur) {
    fraction =
      fraction.substring(0, map.get(numerator)) +
      "(" +
      fraction.substring(map.get(numerator)) +
      ")";
  }
  return `${sign}${int}.${fraction}`;
};
