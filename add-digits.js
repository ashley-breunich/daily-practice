// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

// Example:

// Input: 38
// Output: 2 
// Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
//              Since 2 has only one digit, return it.

var addDigits = function(num) {
    let array = num.toString().split('');
    
    while(array.length >= 1) {
        let digit = 0;
        for(let i = 0; i < array.length; i ++) {
            digit += Number(array[i]);
        }
        if (digit > 9) {
            array = digit.toString().split('');
        } else {
            return digit;
        }
    }
};