// Return an English translated sentence of the passed binary string.

// The binary string will be space separated.

const binaryAgent = (str) =>
  str
    .split(" ")
    .map((value) => String.fromCharCode(parseInt(value, 2)))
    .join("");

console.log(
  binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
  )
);

/* In the binaryAgent function, after converting each binary substring into its corresponding character using String.fromCharCode(), the transformed characters are stored as elements in an array. By calling .join('') on that array, the elements are concatenated together into a single string without any separator between them.

The reason the resulting string appears as a sentence of words with spaces is because of how the binary string is initially split into substrings using str.split(' '). The space character is used as the separator when splitting the binary string. So, if the original binary string has binary values separated by spaces, the resulting array will contain elements representing those values. When the array is joined using .join(''), the individual characters representing those binary values are concatenated together, effectively reconstructing the original sentence-like structure with spaces between the words. */
