//
// Problem:
// Implement a function that takes an array and some 'specific elements'
// The function will remove any of the 'specific elements'
// The function will ignore the element that is not included in the array
// 
//



// Implement a function that takes an array and some specific elements
// Using rest arguments for the function
const removeFromArray = function(...args) {
// Array is the 1st element of the args array
// Create placeholder for the Array.
    const array = args[0];
// Create output array
    let newArray= [];
    // Check each element of the array
    array.forEach(element => {
    // If the array element included in the args, remove it
        if (!args.includes(element))
        // Push the Array Items into the new output Array.
        newArray.push(element);
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
