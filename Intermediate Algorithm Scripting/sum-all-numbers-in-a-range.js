/* We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10. */

function sumAll(arr) {
  const smallestNumber = Math.min(arr[0], arr[1]);
  const largestNumber = Math.max(arr[0], arr[1]);
  const numberRange = [];

  for (let i = smallestNumber + 1; i < largestNumber; i++) {
    numberRange.push(i);
  }

  const mergedArray = [...arr.slice(0, 1), ...numberRange, ...arr.slice(1)]; // ensures original array 'arr' is not mutated

  const sumOfNumbers = mergedArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  return sumOfNumbers;
}

console.log(sumAll([1, 4]));
