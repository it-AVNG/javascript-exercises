//Debug boiler plate
//var debug = require('debug')('recurse')
// log into cmd  DEBUG=recurse node fibonacci.js


//initialize global variable 
var halt=0;



function recurse(a,n,c){
  //stop recursion if reached the member number
  if (c > halt){
    //debug(`array:${a},number:${n},count:${c}`);
    return;
  } else {
    //debug(`array:${a},number:${n},count:${c}`);
    //assign the current value to the fibonacci function_level_array
    a[c] = n;
    //calculate the next member value
    n += a[c-1];
    //increment the membercount
    c++;
    //do it again
    recurse(a,n,c);
  }

}
const fibonacci = function(memberNo) {
  if(memberNo < 0){
    return "OOPS";
  }

  var array =[0]; num = 1; count =0; //reset the array
  halt = memberNo; //set stop recursion when reach the required number

  //initiate the recursion
  if (count <= memberNo){
    count++;
    //debug(`array:${array},number:${num},count:${count}`);
    recurse(array,num,count);
  }

  //return the number
  return array[memberNo];
};
// Do not edit below this line
module.exports = fibonacci;
