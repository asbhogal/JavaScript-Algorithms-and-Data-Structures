// We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, and returns a new array. elem represents an element that may or may not be present on one or more of the arrays nested within arr. Modify the function, using a for loop, to return a filtered version of the passed array such that any array nested within arr containing elem has been removed.

function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    const subArr = arr[i];
    if (subArr.indexOf(elem) === -1) {
      newArr.push(subArr);
    }
  }
  // Only change code above this line
  return newArr;
}

console.log(
  filteredArray(
    [
      [10, 8, 3],
      [14, 6, 23],
      [3, 18, 6],
    ],
    3
  )
);

/* THE for LOOP ITERATES THROUGH THE ARRAY PASSED TO THE FUNCTION (AS LONG AS i IS LESS THAN THE LENGTH OF THE ARRAY OVERALL, AND INCREMENTS i EACH TIME). THE subArr IS CREATED TO STORE THE INDIVIDUAL NESTED ARRAYS IN RESPECT TO THEIR INDEXES (ie. SPLITS APART THE ONE ARRAY OF NESTED ARRAYS INTO A SERIES OF SEPARATE ARRAYS, SINCE i CORRESPONDS TO AN INDEX, OF WHICH IS AN INDIVIDUAL NESTED ARRAY. THIS VARIABLE THEREFORE ONLY STORES ONE ARRAY ON EACH ITERATION, BEING REPLACED BY THE SUBSEQUENT ARRAY FROM THE NESTED ARRAY). indexOf(elem) CHECKS TO SEE IF THE VALUE PASSED IN elem IS PRESENT IN THE ARRAY IN subArr (IF A VALUE ISN'T PRESENT, -1 IS RETURNED, HENCE WHY THIS IS USED IN THE if STATEMENT). IF THE CONDITION PASSES, PUSH THE RESPECTIVE ARRAY in subArray TO THE newArr. REPEAT UNTIL THE for AND if LOOP FINISHES, THEN RETURN THE FINAL newArr (THE for LOOP WILL CONTINUE UNTIL i BECOMES EQUAL TO THE LENGTH OF THE ARRAY. SINCE i STARTS AT 0, THE arr[i] WILL ALSO BE arr[0], WHICH TECHNICALLY SERVES AS THE INDEX COUNT. i IS ONLY INCREMENTED AT THE START OF THE NEXT LOOP (AFTER EACH SUCCESSIVE RUN. A FAILED LOOP WILL NOT INCREMENT THE i - IT ONLY INCREMENTS IF THE CONDITION IS MET).) */
