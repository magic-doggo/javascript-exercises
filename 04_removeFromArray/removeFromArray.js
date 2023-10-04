const removeFromArray = function(array, ...values) {
  let i = 0;
  while (i < array.length) {
    if (array[i] == values) {
      array.splice(i, 1);
    } else {
      ++i;
    }
  }
  return array;
}

// Recommended easy solution, using rest operators
// const removeFromArray = function (array, ...args) {
//   const newArray = [];
//   array.forEach((item) => {
//     if (!args.includes(item)) {
//       newArray.push(item);
//     }
//   });
//   return newArray;
// };

// Do not edit below this line
module.exports = removeFromArray;
