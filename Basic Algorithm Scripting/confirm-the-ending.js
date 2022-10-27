// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
  let endingWord = str.slice(str.length - target.length);
  return endingWord === target ? true : false;
}

console.log(confirmEnding("Connor", "n"));

/* .slice() CAN TAKE UP TO TWO PARAMETERS HERE. ONE WHICH IS THE INDEX TO START COPYING FROM, THE OTHER TO STOP COPYING FROM (NOT INCLUDING THE STOP VALUE). HOWEVER HERE, THE PARAMETERS PASSED RESULT IN A VALUE THAT IS CLASSED AS ONE PARAMETER, e.g 5 - 3 = 2. THOUGH THE LENGTHS ARE DIFFERENT TO THE INDEXES, THE .length IS MERELY USED AS A MEASURE RELATIVE TO THE ENTRY - (IT IS ESSENTIALLY DYNAMIC, RATHER THAN GIVING A FIXED LENGTH VALUE, WHICH WOULDN'T WORK WITH OTHER ARGUMENTS PASSED TO IT OF DIFFERENT LENGTHS AND CHARACTERS.) THE RESULTING NUMBER IS THE INDEX VALUE TO START AT. BY DEFAULT, slice WILL START FROM THIS INDEX AND COPY UP TO THE END OF IT. (INDEX 2 IS DIFFERENT TO LENGTH OF 2) */