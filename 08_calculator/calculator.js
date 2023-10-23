const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arrayValue){
  return arrayValue.reduce(function (a, b){ return a + b; }, 0);
}
const multiply = function(arrayValue) {
  return arrayValue.reduce(function (a, b) {return a * b}, 1);
};

const power = function(a, b) {
  return a ** b
};

const factorial = function(factor) {
  let factorTotal = 1
  for (i = 1; i <= factor; i++){
    factorTotal *= i;
  }
  return factorTotal;
};
//add, subtract, get the sum, multiply, get the power, and find the factorial
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
