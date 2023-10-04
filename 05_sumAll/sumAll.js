const sumAll = function(firstNumber, lastNumber) {
  let sum;
  if (typeof firstNumber !== 'number' || typeof lastNumber !== 'number' || firstNumber < 0 || lastNumber < 0 ){
    return 'ERROR';
  }
  else if (firstNumber > lastNumber) {
    sum = (firstNumber + lastNumber) * (firstNumber - lastNumber + 1) / 2;
    return sum;
  }
  else {
    sum = (firstNumber + lastNumber) * (lastNumber - firstNumber + 1) / 2 ;
    return sum;
  }
};

//sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
//pitagora : (1+10)x10/2

// Do not edit below this line
module.exports = sumAll;
