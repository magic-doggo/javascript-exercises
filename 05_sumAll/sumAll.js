// const sumAll = function(firstNumber, lastNumber) {
//   let sum;
//   if (typeof firstNumber !== 'number' || typeof lastNumber !== 'number' || firstNumber < 0 || lastNumber < 0 ){
//     return 'ERROR';
//   }
//   else if (firstNumber > lastNumber) {
//     sum = (firstNumber + lastNumber) * (firstNumber - lastNumber + 1) / 2;
//     return sum;
//   }
//   else {
//     sum = (firstNumber + lastNumber) * (lastNumber - firstNumber + 1) / 2 ;
//     return sum;
//   }
// };

//sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10

const sumAll = function(firstNumber, lastNumber) {
  let biggerNumber;
  let smallerNumber;
  if (typeof firstNumber !== 'number' || typeof lastNumber !== 'number' || firstNumber < 0 || lastNumber < 0 ){
  return 'ERROR';
  }
  else if (firstNumber > lastNumber) {
    biggerNumber = firstNumber;
    smallerNumber = lastNumber;
  }
  else {
    biggerNumber = lastNumber;
    smallerNumber = firstNumber
  }
  let sum = 0;
  for ( let i = smallerNumber; i <= biggerNumber; i++){
    sum += i;
  }
  return sum;
}



// Do not edit below this line
module.exports = sumAll;
