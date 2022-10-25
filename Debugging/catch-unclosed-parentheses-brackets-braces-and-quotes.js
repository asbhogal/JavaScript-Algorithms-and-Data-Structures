// Fix the two pair errors in the code.

/*let myArray = [1, 2, 3;
let arraySum = myArray.reduce((previous, current =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);*/

let myArray = [1, 2, 3];
let previous = 0;
let arraySum = myArray.reduce((previous, current) =>  (previous + current));
console.log(`Sum of array values is: ${arraySum}`);