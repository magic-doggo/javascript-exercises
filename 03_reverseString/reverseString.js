const reverseString = function(string) {
  let length = string.length;
  const array = [];
  for (let i = 0; i < length; i++) {
    array[length - i - 1] = string[i];
  }
  
  let stringRev = array.join("")
  return(stringRev);
};

//Recommended answer below. Mine works too though!
// const reverseString = function (string) {
//   return string.split("").reverse().join("");
// };

// Do not edit below this line
module.exports = reverseString;
