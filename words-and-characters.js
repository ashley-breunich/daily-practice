// You are given an array of strings words and a string chars.

// A string is good if it can be formed by characters from chars (each character can only be used once).

// Return the sum of lengths of all good strings in words.

// Example 1:

// Input: words = ["cat","bt","hat","tree"], chars = "atach"
// Output: 6
// Explanation: 
// The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.

var countCharacters = function(words, chars) {
    
    let characters = {};
    let charArray = chars.split('');
    let totalCount = 0;
    
    for(let i = 0; i < charArray.length; i++) {
        if(!characters[charArray[i]]) {
            characters[charArray[i]] = 1;
        } else {
            characters[charArray[i]]++;
        }
    }
    for(let i = 0; i < words.length; i++) {
        let tempObj = {...characters}
        let currentWord = words[i].split('');
        let currentCount = 0;
        for(let j = 0; j < currentWord.length; j++) {
            if(tempObj.hasOwnProperty(currentWord[j]) && currentWord[j] !== 0) {
                currentCount++;
                totalCount++;
                tempObj[currentWord[j]]--;
                console.log(currentWord[j], tempObj[currentWord[j]]);
                console.log(currentCount, 'current count');
                console.log(totalCount, 'total count')
            } else {
                totalCount -= currentCount;
                currentCount = 0;
                break;
            }
        }
    }
    
    return totalCount;
};