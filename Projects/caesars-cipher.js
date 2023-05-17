/* CREATE LOOKUP TABLE OBJECT */

const CHARACTER_CONVERSION_TABLE = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
};

/* ENCRYPT/DECRYPT FUNCTION */

function rot13(str) {
  const regexCheck = /[a-z]/i;
  let inputString = str,
    convertedString = "";

  for (let i = 0; i < inputString.length; i++) {
    const individualLetter = str[i];
    let convertedLetter = "";

    if (regexCheck.test(individualLetter)) {
      convertedLetter = CHARACTER_CONVERSION_TABLE[individualLetter];
      convertedString += convertedLetter;
    } else {
      convertedString += inputString[i];
    }
  }

  return convertedString;
}

console.log(rot13("SERR PBQR PNZC"));

/* One of the good things about Objects is they can be used as lookups, which are ideal for conversions where a 'base' set/map JavaScript can refer to is created. The full list is needed to match every letter of the alphabet on the left, to its respective ROT13 letter on the right (since the key is what is parsed in the bracket notation method of lookup. It's value is then returned). This avoids the issue of a value having a +13 which passes the end of the alphabet - the 'cycling' is already hard-coded in the Object. 

Regex is used to see if the individual string value is purely alphabetical. if it is (ie. if the test() returns 'true'), lookup their respective values and append this to the convertedString variable (leveraging bracket notation to retrieve the value of the respective key in the key-value/property). If the test() returns false, append it to the string. Since the for loop walks through each letter from beginning to end, each is checked against the if and is mapped back to its original position, either unaltered, or converted, so the letter positions/indexes remain the same. 

After the for loop finishes, the convertedString is then returned. 

Since Object mapping uses all letters of the alphabet in a ROT13 cypher, this function can also encrypt, as any value incoming is shifted 13 places to its respective value in the Object. Here, the decrypting value is sensical to humans, but the process is still the same for the reverse. */
