// Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>". Remember the wildcard . in a regular expression matches any character.

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);

console.log(result);

// ? prevents the regex from retrieving as many of the matching strings as it can find. This way, it only picks up the one instance of a string value with <h1> in it, ie. be lazy about it and retrieve the first that is found, not the rest that may exist. Inside, . will match any character (e.g. h4, z3, W0) and * will match 0 or more of the previous. This means it will return <H1>, <h> and <> if these are respectfully present in the 'text' string. Appending 'g' will return both instances of <h1> in this case.