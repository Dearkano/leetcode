/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "(":
      case "[":
      case "{":
        stack.push(s[i]);
        break;
      case ")":
        if (stack.length === 0 || stack[stack.length - 1] !== "(") return false;
        stack.pop();
        break;
      case "]":
        if (stack.length === 0 || stack[stack.length - 1] !== "[") return false;
        stack.pop();
        break;
      case "}":
        if (stack.length === 0 || stack[stack.length - 1] !== "{") return false;
        stack.pop();
        break;
    }
  }
  return stack.length === 0;
};

console.log(isValid("{[()]}"));
