const repeatString = function(string,num) {
    let temp = '';
    if (num>= 0){
        for (let i=0; i<num; i++) {
            temp += string; 

        }
        return temp;
    } else {
        return 'ERROR';
    }   
};

// Do not edit below this line
module.exports = repeatString;
