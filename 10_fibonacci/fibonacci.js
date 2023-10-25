const fibonacci = function(indexNumber) {
  let fibonacciNumber;
  let fnminus1 = 1;
  let fnminus2 = 1;
  if (parseInt(indexNumber) == 1 || (indexNumber) == 2) {
    return 1;
  }
  if ((parseInt(indexNumber)) < 0){
    return "OOPS"
  }
  for (let i = 0; i < indexNumber -2 ; i++){
      fibonacciNumber = fnminus1 + fnminus2;
      fnminus2 = fnminus1;
      fnminus1 = fibonacciNumber;
  }
  return(fibonacciNumber)
};

// Do not edit below this line
module.exports = fibonacci;
