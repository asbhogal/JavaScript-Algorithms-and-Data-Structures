// Use the every method inside the checkPositive function to check if every element in arr is positive. The function should return a Boolean value.

function checkPositive(arr) {
  return arr.every(function (currentValue) {
    return currentValue >= 0;
  });
}

checkPositive([1, 2, 3, -4, 5]);

console.log(checkPositive([1, 2, 3, -4, 5])); // returns false - when at least one element fails the check, the result overall is false

// The every() method in JavaScript returns true if every element in the array satisfies the specified condition in the callback function. If any element fails the condition, it returns false.
