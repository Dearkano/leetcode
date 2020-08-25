/**
 * @param {string[]} source
 * @return {string[]}
 */
var removeComments = function (source) {
  const regex = new RegExp("//.*|/\\*(.|\n)*?\\*/", "g");
  const s = source.join("\n").replace(regex, "").split("\n");
  return s.filter((item) => item.length > 0);
};
console.log(
  removeComments([
    "/*Test program */",
    "int main()",
    "{ ",
    "  // variable declaration ",
    "int a, b, c;",
    "/* This is a test",
    "   multiline  ",
    "   comment for ",
    "   testing */",
    "a = b + c;",
    "}",
  ])
);
