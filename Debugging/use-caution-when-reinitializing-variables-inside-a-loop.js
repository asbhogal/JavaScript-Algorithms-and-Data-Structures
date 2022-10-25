// The following function is supposed to create a two-dimensional array with m rows and n columns of zeroes. Unfortunately, it's not producing the expected output because the row variable isn't being reinitialized (set back to an empty array) in the outer loop. Fix the code so it returns a correct 3x2 array of zeroes, which looks like [[0, 0], [0, 0], [0, 0]].

function zeroArray(m, n) {
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {             // OUTER LOOP
    row = [];
    for (let j = 0; j < n; j++) {           // INNER LOOP
      row.push(0);
    }
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

// LINE 7 EXPLAINED
/* The row variable has now been declared inside the outer loop. This way, two zeroes are added from the inner loop in the first row, a new row is then created where two more zeroes are passed to it from the inner loop, a new row is then created where two more zeroes are passed to it from the inner loop, then after three rows have been added of two zero columns, the outer loop stops because i is now 3, which is not less than m (it is the same value.) This then returns the value. If 'row' wasn't reinitialized each time, it would add three rows of 6 columns, because another two zero columns are being added on with each pass of the the outer loop (added on from the previous iteration). This results in the [ [ 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0 ] ] case



 Now a new row will be initialised during each iteration of the outer loop, allowing for the desired matrix (this must be reset here before the n zeroes can be pushed into the current row). */