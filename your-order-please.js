function order(words){
    let array = words.split(' ');
    let newArr = [];
    
    if (words === "") {
      return "";
    }
    
    for(let i = 1; i < array.length + 1; i++) {
      for(let j = 0; j < array.length; j++) {
        if (array[j].includes([i])) {
         newArr.push(array[j]);
        };
      }
    }
    
    let joinedArray = newArr.join(' ');
    let finalString = joinedArray.toString();
    return finalString;
  }