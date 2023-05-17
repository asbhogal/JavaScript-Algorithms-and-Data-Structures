// Change the regex ohRegex to match the entire phrase Oh no only when it has 3 to 6 letter h's.

let ohStr = "Ohhh no";
let ohRegex = /\bOh{3,6}\sno\b/i;
let result = ohRegex.test(ohStr);
