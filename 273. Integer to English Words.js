/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
  const LESS_THAN_20 = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const TENS = [
    "",
    "Ten",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];
  const THOUSANDS = ["", "Thousand", "Million", "Billion"];
  const helper = (n) => {
    if (n === 0) return "";
    else if (n < 20) return LESS_THAN_20[n] + " ";
    else if (n < 100) return TENS[Math.floor(n / 10)] + " " + helper(n % 10);
    else
      return (
        LESS_THAN_20[Math.floor(n / 100)] + " " + "Hundred " + helper(n % 100)
      );
  };
  if (num === 0) return "Zero";
  let ans = "";
  let i = 0;
  while (num > 0) {
    if (num % 1000 > 0) {
      ans = helper(num % 1000) + THOUSANDS[i] + " " + ans;
    }
    i++;
    num = Math.floor(num / 1000);
  }
  return ans.trim();
};
