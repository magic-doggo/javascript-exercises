const getTheTitles = function(books) {
  let booksArray = []
  for (let i = 0; i < books.length; i++){
    booksArray.push(books[i]["title"])  
  }
  console.log(booksArray)
  return(booksArray)
};

// const getTheTitles = function (array) {
//   return array.map(function(book) {
//     return book.title
//   });
// }; recommended solution modified from arrow function


// Do not edit below this line
module.exports = getTheTitles;
