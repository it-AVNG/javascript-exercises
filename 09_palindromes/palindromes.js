//to reverse a string;
function reverseString(string) {
  return string.split("").reverse().join("");
}
const palindromes = function (a) {
  //TODO: Write a method to remove spcial characters (use replace and regex)
  let str = a.toLowerCase().replace(/[^a-z]/gi,'');//new string with no special characters and lower
  let mid = str.length/2;

  //TODO: Write a method to determine modulus for 2 (if =0, split evenly, if not, pop the middle and split evenly )
  if (str.length%2 == 0){

    let back = str.slice(mid);
    let front = str.slice(0,mid);
   
    return (reverseString(back) == front);
  } else {

    let back = str.slice(mid+2);
    let front = str.slice(0,mid-1);

    return (reverseString(back) == front);
  }


  //TODO: method to compare the forward and reverse strings for each case above.
  
};

// Do not edit below this line
module.exports = palindromes;
