const debug = require("debug")("oldest");
//log to cmd DEBUG=oldest node findTheOldest.js
//test case for debug
// const people = [
//   {
//     name: "Carly",
//     yearOfBirth: 1942,
//     yearOfDeath: 1970,
//   },
//   {
//     name: "Ray",
//     yearOfBirth: 1962,
//     yearOfDeath: 2011,
//   },
//   {
//     name: "Jane",
//     yearOfBirth: 1912,
//     yearOfDeath: 1941,
//   },
// ]

var disYear;

//add age of the person to the object
function addAge(person){
  if ("yearOfDeath" in person){
    let d = person.yearOfDeath
    let b = person.yearOfBirth
    person.age = d-b;
    return person
  } else {
    let b = person.yearOfBirth
    person.age = disYear-b;
    return person
  }
}

//main program
const findTheOldest = function(people) {

  //create today year variable
  var dis = new Date();
  disYear = dis.getFullYear();

  //update people objects with person.age
  people.map(addAge);

  //return the person with highest age
  let oldest = people.reduce(function(previous,current){
    if (current.age > previous.age){
    return previous = current}
    return previous;
  }, people[0]);

  return oldest;
};


// debug output;
// const output = findTheOldest(people);
// debug(output);

// Do not edit below this line
module.exports = findTheOldest;
