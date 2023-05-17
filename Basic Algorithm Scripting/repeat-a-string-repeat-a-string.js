// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

function repeatStringNumTimes(str, num) {
  let negativeCheck = Math.sign(num);

  if (negativeCheck === -1) {
    return "";
  } else {
    let newString = Array(num).fill(str).join("");

    return newString;
  }
}

console.log(repeatStringNumTimes("abc", 2));

// Math.sign will check if a value passed to it is negative or not. If it is, it will return -1. This is the first 'elimination' which can be considered, by reasonable means, to be appropriate to parse first, before any other code on the arguments passed.

// newString MUST BE DECLARED INSIDE THE else, OTHERWISE IF DECLARED OUTSIDE THE LOOP, THE num, EVEN IF IT IS NEGATIVE, WILL BE PARSED, RESULTING IN AN invalid MESSAGE. THIS MUST BE FILTERED OUT, AND THE VARIABLE THEN DECLARED LOCALLY AFTERWARDS
