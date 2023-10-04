const removeFromArray = function(array, value1, value2, value3, value4) {
  let i = 0;
  while (i < array.length) {
    if (array[i] === value1 || array[i] === value2 || array[i] === value3 || array[i] === value4) {
      array.splice(i, 1);
    } else {
      ++i;
    }
  }
  return array;
}

// Do not edit below this line
module.exports = removeFromArray;
