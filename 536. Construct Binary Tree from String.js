/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} s
 * @return {TreeNode}
 */
var str2tree = function (s) {
  const s2t = (start, end) => {
    if (start >= end) return null;
    const root = new TreeNode();
    let t = end;
    for (let i = start; i < end; i++) {
      if (s[i] === "(") {
        t = i;
        break;
      }
    }
    root.val = Number(s.substring(start, t));
    const lp = [];
    const rp = [];
    let l = 0;
    let r = 0;
    for (let i = start; i < end; i++) {
      if (l === 0 && s[i] === "(") lp.push(i);
      if (s[i] === "(") l++;
      if (s[i] === ")") r++;
      if (l > 0 && l === r) {
        l = 0;
        r = 0;
        rp.push(i);
      }
    }

    if (lp.length > 0) root.left = s2t(lp[0] + 1, rp[0]);
    if (lp.length > 1) root.right = s2t(lp[1] + 1, rp[1]);
    return root;
  };
  return s2t(0, s.length);
};

console.log(str2tree("-4(2(3)(1))(6(5))"));
