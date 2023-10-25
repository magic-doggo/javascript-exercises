const palindromes = function (string) {
  // let noPunctuation = string.replace(/!.\s,/g, "")
  let noPunctuation = string.match(/[^\W]+/g).join('').toLowerCase()
  let reverse = noPunctuation.split("").reverse().join("");
  if (noPunctuation == reverse){
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = palindromes;
