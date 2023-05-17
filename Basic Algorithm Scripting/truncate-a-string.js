// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

// THE SIMPLEST MATHEMATICAL WAY IS TO START AT INDEX 0. (THIS IS MUCH MORE EFFICIENT THAN TAKING THE LENGTH OF THE str, SUBTRACTING num FROM IT AND THEN NEGATING THIS FROM THE str FROM IT'S END). THE SECOND PARAMETER OF slice (num) STOPS AT THAT RESPECTIVE INDEX BUT DOESN'T COUNT IT, SO WHAT IS RETURNED IS THE VALUES FROM 0 TO num - 1 (LENGTH-WISE) "..." IS THEN CONCATENATED AT THE END OF THIS. .slice() MEANS THE VALUE CAN THEN BE RETURNED WITHOUT NEEDING A NEW VARIABLE OR LEVERAGING .splice() WHILST STILL HAVING THE ORIGINAL str IN THE CODE. THE FUNCTION ESSENTIALLY JUST MANIPULATES THE VALUE OF THE ARGUMENTS PASSED AND OUTPUTS EITHER THIS, OR THE ORIGINAL str. IT IS THEREFORE MORE EFFICIENT.
