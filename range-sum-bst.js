// Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).

// The binary search tree is guaranteed to have unique values.

// Example 1:

// Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
// Output: 32

var rangeSumBST = function(root, L, R) {
    let sum = 0;
    let _walk = root => {
        if(root.val >= L && root.val <= R) {
            sum += root.val;
        }
        if(root.left) {
            _walk(root.left);
        }
        if(root.right) {
            _walk(root.right);
        }
    }
    _walk(root);
    return sum;
};