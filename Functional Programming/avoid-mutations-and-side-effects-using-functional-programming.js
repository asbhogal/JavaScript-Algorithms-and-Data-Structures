// Fill in the code for the function incrementer so it returns the value of the global variable fixedValue increased by one.

let fixedValue = 4;

function incrementer() {
  return fixedValue + 1;
}

console.log(incrementer(), fixedValue); // returns 5, 4 - showing fixedValue remains unchanged
