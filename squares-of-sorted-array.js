// Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

// Example 1:

// Input: [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Example 2:

// Input: [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

var sortedSquares = function(A) {
    let squaredArr = [];
    let done = false;
    for(i = 0; i < A.length; i++) {
        let current = A[i]*A[i];
        squaredArr.push(current); 
    }
     
    while(!done) {
        done = true;
        for(i = 1; i < squaredArr.length; i++) {
            if(squaredArr[i-1] > squaredArr[i]){
                done = false;
                let temp = squaredArr[i-1];
                squaredArr[i-1] = squaredArr[i];
                squaredArr[i] = temp; 
            }
        }
    }
    
    return squaredArr;
};
