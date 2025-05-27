// we will se about how is the functionally of Some and Every 

// SOME
var numbers = [1,2,3,4,5,6,7,8,9,10];

var total = numbers.some((numero)=>  numero % 2 ===  0);
console.log(total);

// Above we can see how the console log show us "True" 'cause someone complement the conditional, otherside that is the other function as ".EVERY"


// EVERY
var numbers = [1,2,3,4,5,6,7,8,9,10];

var total = numbers.every((numero)=>  numero % 2 ===  0);
console.log(total);
// Now, we can see how with every show us the return false , 'cause with this function must complement each parameter with the contidional.