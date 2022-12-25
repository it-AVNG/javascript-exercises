//const debug = require("debug")("title");
//log into cmd DEBUG=title node getTheTitles.js
function mapTitle(item){
  return item.title;
}

const getTheTitles = function(objectArray) {
  return objectArray.map(mapTitle);
};

//for debuging;
// const books = [
//   {
//     title: 'Book',
//     author: 'Name'
//   },
//   {
//     title: 'Book2',
//     author: 'Name2'
//   }
// ]


// const namme =getTheTitles(books);
// debug(namme);

// Do not edit below this line
module.exports = getTheTitles;
