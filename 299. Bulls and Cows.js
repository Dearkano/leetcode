/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  let bull = 0;
  let cow = 0;
  const map = new Map();
  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      bull++;
    } else {
      if (!map.get(secret[i])) map.set(secret[i], 0);
      if (!map.get(guess[i])) map.set(guess[i], 0);
      if (map.get(secret[i]) < 0) cow++;
      if (map.get(guess[i]) > 0) cow++;
      map.set(secret[i], map.get(secret[i]) + 1);
      map.set(guess[i], map.get(guess[i]) - 1);
    }
  }

  return `${bull}A${cow}B`;
};
console.log(getHint("1807", "7810"));
