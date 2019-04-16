// Given the root node of a binary search tree (BST) and a value. You need to find the node in the BST that the node's value equals the given value. Return the subtree rooted with that node. If such node doesn't exist, you should return NULL.

var searchBST = function(root, val) {
    if(!root) {
        return null;
    }
    if (val < root.val) {
        return searchBST(root.left, val);
    } else if (val > root.val) {
        return searchBST(root.right, val);
    } else if (val === root.val) {
        console.log(val, root.val);
        return root;
    } else {
        return null;
    }
};