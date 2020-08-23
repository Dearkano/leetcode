const s = "aaabbbc";

const bit = [0];
const n = s.length;

for (let i = 0; i < n; i++) {
  bit[i + 1] = bit[i] ^ (1 << (s.charCodeAt(i) - 97));
}

let count = 0;
let num = bit[6] ^ bit[0]; // s.substring(0, 5) odd chars
while (num > 0) {
  num = num & (num - 1);
  count++;
}
console.log(count);
