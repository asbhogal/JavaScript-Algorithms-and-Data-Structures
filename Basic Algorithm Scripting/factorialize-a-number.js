// Return the factorial of the provided integer. Only integers greater than or equal to zero will be supplied to the function.

function factorialize(num) {
  if (num === 0) {        
    return 1;
  }
  num *= factorialize(--num);
  return num;
}

console.log(factorialize(10));

// LINE 2 - 0 multiplied by anything = 0. Here, the intention is to return 1 if it reaches this point

// LINE 5 - Using the function here means it calls it again, ie. runs through and starts again at line 2. Using -- before the 'num' means the decrement operator (--) decrements and returns the value AFTER decrementing. Num-- would return maximum call stack size exceeded