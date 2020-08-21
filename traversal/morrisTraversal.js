const morrisTraversal = (root) => {
  let node = root;
  const preorder = [];
  const inorder = [];
  let pre = null;
  while (node) {
    if (!node.left) {
      inorder.push(node.val);
      preorder.push(node.val);
      node = node.right;
    } else {
      pre = node.left;
      while (pre.right && pre.right !== node) pre = pre.right;
      if (!pre.right) {
        pre.right = node;
        preorder.push(node.val);
        node = node.left;
      } else {
        pre.right = null;
        inorder.push(node.val);
        node = node.right;
      }
    }
  }
  console.log(preorder);
  console.log(inorder);
};

morrisTraversal({
  val: 4,
  left: { val: 2, left: { val: 1 }, right: { val: 3 } },
  right: { val: 6, left: { val: 5 }, right: { val: 7 } },
});
