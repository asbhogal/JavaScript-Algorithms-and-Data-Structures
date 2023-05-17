// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str) {
  const individualWords = str.split(" ");

  let finalString = [];

  for (let individualLetter of individualWords) {
    const modifiedFirstLetter = individualLetter[0].toUpperCase(),
      modifiedRemainingLetters = individualLetter.slice(1).toLowerCase();

    finalString.push(`${modifiedFirstLetter}${modifiedRemainingLetters}`);
  }

  return finalString.join(" ");
}

console.log(titleCase("I'm a little tea pot"));

/*  LINE 7 CONVERTS str INTO AN ARRAY OF STRING VALUES AND ASSIGNS THIS TO individual words.
    LINE 9 INITIALISES AN ARRAY VARIABLE TO STORE THE FINAL OUTPUT
    LINE 11 ASSIGNS individualLetter WITH VALUES OF THE ARRAY'S ENTRY WITH EACH ITERATION
    LINE 13 TAKES THE FIRST INDEX OF EACH individualLetter VALUE AND CONVERTS THESE TO UPPERCASE, THEN ASSIGNS TO modified FirstLetter
    LINE 14 TAKES THE REMAINING CONTENTS (SEE BELOW) AND STANDARDISES THEM BY CONVERTING TO LOWERCASE, THEN ASSIGNS TO modifiedRemainingLetters
    .slice() WITH ONE PARAMETER STARTS FROM THE INDEX AND UP UNTIL THE VALUE OF THE FINAL INDEX
    LINE 16 PUSHES THE VARIABLE CONTENTS BACK TO THEIR RESPECTIVE ARRAY POSITIONS (TEMPLATE STRINGS USED HERE) 
    FINALLY, LINE 19 TAKES THE ARRAY OF NEW VALUES AND CONVERTS THESE BACK INTO A STRING */
