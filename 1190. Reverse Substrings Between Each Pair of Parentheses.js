/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ")") {
      const arr = [];
      while (stack.length > 0 && stack[stack.length - 1] !== "(")
        arr.push(stack.pop());
      // stack[stack.length-1] === '('
      if (stack.length > 0) stack.pop();
      for (const c of arr) stack.push(c);
    } else {
      stack.push(s[i]);
    }
  }
  return stack.join("");
};

console.log(reverseParentheses("(u(love)i)"));
