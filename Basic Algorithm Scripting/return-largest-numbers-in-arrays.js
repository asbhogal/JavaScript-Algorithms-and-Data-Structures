// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays. Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {

  let largestNumbers = []

  for (let subArr of arr ) {
    console.log(subArr);

    console.log(largestNumbers.push(Math.max(...subArr)));
  }
 
  return largestNumbers;
}

console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));

/* CREATES A NEW ARRAY TO STORE THE LARGEST VALUES BEFORE ANY ITERATIONS. THEN, WALKS THROUGH EACH SUB ARRAY, RETRIEVES THE LARGEST VALUE OF THEM, AND PUSHES THESE TO THE NEW ARRAY, WHICH IS THEN RETURNED. IN LINE 7, subArr STORES THE VALUES OF EACH INVIDUAL SUB-ARRAY, SEEN AS VALUES IN THEIR OWN. WITHIN THESE LINE 10 USES THE SPREAD OPERATOR TO SEARCH THROUGH EACH OF THESE, 'EXPANDING' THEM INTO THEIR SUBSEQUENT ELEMENTS (IE. INDIVIDUAL NUMBERS) AND PUSH THE MAX VALUES OF THESE TO THE NEW ARRAY */