function insertDash(num) {
    let digitArr = [];
    let finalArr = [];
    const splitInteger = num.toString().split('');
    for (let i = 0; i < splitInteger.length; i++) {
      let stringDigit = splitInteger[i];
      let newDigit = parseInt(stringDigit);
      digitArr.push(newDigit);
    }
    for (let j = 0; j < digitArr.length; j++) {
      if ((digitArr[j]%2 === 1) && (digitArr[j-1]%2 === 1)) {
        finalArr.push(-digitArr[j]);
      } else {
        finalArr.push(digitArr[j]);
      }
    }
    return finalArr.join('');
  }