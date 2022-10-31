// Remove all falsy values from an array. Return a new array; do not mutate the original array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.

function bouncer(arr) {

  const copyArr = [...arr];

  return copyArr.filter(Boolean)

}

console.log(bouncer([null, NaN, 1, 2, undefined]));

// THE .filter(Boolean) WILL REMOVE ALL VALUES WHICH IN BOOLEAN EQUATE TO A FALSY / RETURN FALSE ie. THIS WILL KEEP THOSE WHERE BOOLEAN BY DEFAULT RESOLVES TO truthy / RETURNS TRUE

//  A FALSY VALUE CONVERTED TO BOOLEAN WOULD RETURN FALSE, SO ALL OTHER VALUES OUTSIDE OF THE FALSY (LINE 3) ARE CONSIDERED TRUTHY. THIS INCLUDES STRINGS CONVERTED TO BOOLEAN, WHICH WOULD RETURN TRUE.