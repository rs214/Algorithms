// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

//width = BF traversal

function levelWidth(root) {
  var arr = [root, 's'];
  var result = [0];

  while(arr.length > 1) {
    const node = arr.shift();

    if (node === 's') {
      result.push(0);
      arr.push('s');
    } else {
      arr.push(...node.children);
      result[result.length - 1]++;
    }
  }
  return result;
}

module.exports = levelWidth;
