const reverseString = function(text) {
    let array = text.split('');
    let strReverse = "";
    for (let i= array.length - 1; i>=0; i--){
        strReverse = strReverse + array[i];

    }   
    return strReverse;

};

// Do not edit below this line
module.exports = reverseString;
