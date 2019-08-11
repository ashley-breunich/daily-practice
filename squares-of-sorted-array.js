// Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

// Example 1:

// Input: [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Example 2:

// Input: [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

var sortedSquares = function(A) {
    let squaredArr = [];
    let minIdx;
    let temp;
    
    for(let i = 0; i < A.length; i++) {
        let current = A[i]*A[i];
        squaredArr.push(current); 
    }
    
    for(let i = 0; i < squaredArr.length; i++) {
        minIdx = i;
        for(let j=i+1; j < squaredArr.length; j++) {
            if(squaredArr[j] < squaredArr[minIdx]) {
                minIdx = j;
            }
        }
        temp = squaredArr[i];
        squaredArr[i] = squaredArr[minIdx];
        squaredArr[minIdx] = temp;
    }
    
    return squaredArr;
};