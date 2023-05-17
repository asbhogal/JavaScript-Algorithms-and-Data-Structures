//Return the length of the longest word in the provided sentence. Your response should be a number.

function findLongestWordLength(str) {
  let individualWords = str.split(" ");

  let longestWord = 0;

  for (let word of individualWords) {
    if (word.length > longestWord) {
      longestWord = word.length;
    }
  }

  return longestWord;
}

console.log(
  findLongestWordLength(
    "What is the average airspeed velocity of an unladen swallow"
  )
);

/*  LINE 5 - TAKES THE str VALUE AND SPLITS IT INTO AN ARRAY OF INDIVIDUAL STRINGS. THE ' ' SIGNIFIES THE SPACE WHERE THE SUBSEQUENT STRING IS, AND IS THEREFORE OMITTED

    LINE 7 - DECLARES AND INITIALIZES THE longestWord WHICH WILL HOLD THE VALUE OF THE NUMBER OF LETTERS OF THE LONGEST WORD IN THE ENTERED STRING (PASSED TO str)

    LINE 9 - FOR OF TAKES AN ITERABLE OBJECT (HERE, AN ARRAY), LOOPS THROUGH THE DATA AND ASSIGNS EACH INDIVIDUAL ENTRY TO THE VARIABLE word WITH EACH ITERATION (ie. ONE WORD AFTER THE OTHER, NOT COLLECTIVELY) 
    
    LINE 11 - THE LENGTH (NUMBER) OF WORD IS COMPARED TO LONGEST. .length DOES NOT APPLY TO LONGEST, AS IT HAS ALREADY BEEN DECLARED AS A NUMBER VARIABLE IN LINE 7
    
    THE LOOP WILL RUN THROUGH EACH WORD AND STORE THE VALUE IN word, PASSING THIS TO longestWord. AFTER THE ITERATIONS HAVE FINISHED, IT RETURNS THE LENGTH OF THE LONGEST WORD. */
