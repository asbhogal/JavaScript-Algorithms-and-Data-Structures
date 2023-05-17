// Complete the code for the squareList function using any combination of map(), filter(), and reduce(). The function should return a new array containing the squares of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it. An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2].

const squareList = (arr) => {
  const filteredValues = arr.filter(
    (value) => value >= 0 && value === Math.round(value)
  );
  const squaredValues = filteredValues.map((value) => {
    return value ** 2;
  });
  return squaredValues;
};

const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
console.log(squaredIntegers);

// MAP THROUGH ARRAY ELEMENTS
// FILTER THE POSITIVE NUMBERS (EXCLUDE NEGATIVE AND REAL NUMBERS)
// SQUARE THE REMAINING NUMBERS
// RETURN IN A NEW ARRAY
