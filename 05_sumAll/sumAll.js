
//Implement a function that takes 2 intergers
//returns the sum of every number between the 2 integers





const sumAll = function(a,b) {
        // ok solution is below
        // If arguments is negative numbers, stop 
        if (arguments[0] <0 || arguments[1]< 0){ return 'ERROR';}

        //If type of arguments is not number, stop

        if (typeof arguments[0]!='number' || typeof arguments[1]!='number'){
            return 'ERROR';
         }


        //take the 2 integers and put it into an array
       
        const args = Array.prototype.slice.call(arguments);

         //sort the array 
        const array1 = args.sort();
        let sum = 0;
        let i = 0;
    
        //loop to make the sum
        do {
            sum = sum + (array1[0] + i);
            i++;
        } while ( i <= (array1[1]-array1[0]))

        //returns the sum
        return sum;
    


};

// Do not edit below this line
module.exports = sumAll;
