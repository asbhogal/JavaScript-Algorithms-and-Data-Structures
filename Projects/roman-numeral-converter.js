// Convert the given number into a roman numeral.

// Roman numerals	Arabic numerals
//      M	             1000
//      CM	            900
//      D	              500
//      CD	            400
//      C	              100
//      XC	             90
//      L	               50
//      XL	             40
//      X	               10
//      IX	              9
//      V	                5
//      IV	              4
//      I	                1

// All roman numerals answers should be provided in upper-case.

class RomanNumeralConverter {
  constructor(number) {
    this.number = number;
    this.result = "";
  }

  convertToRomanNumeral(romanSymbol, arabicNumeral) {
    while (this.number >= arabicNumeral) {
      this.number -= arabicNumeral;
      this.result += romanSymbol;
    }
  }
}

function convertToRoman(num) {
  let newConversion = new RomanNumeralConverter(num);

  newConversion.convertToRomanNumeral("M", 1000);
  newConversion.convertToRomanNumeral("CM", 900);
  newConversion.convertToRomanNumeral("D", 500);
  newConversion.convertToRomanNumeral("CD", 400);
  newConversion.convertToRomanNumeral("C", 100);
  newConversion.convertToRomanNumeral("XC", 90);
  newConversion.convertToRomanNumeral("L", 50);
  newConversion.convertToRomanNumeral("XL", 40);
  newConversion.convertToRomanNumeral("X", 10);
  newConversion.convertToRomanNumeral("IX", 9);
  newConversion.convertToRomanNumeral("V", 5);
  newConversion.convertToRomanNumeral("IV", 4);
  newConversion.convertToRomanNumeral("I", 1);

  return newConversion.result;
}

convertToRoman(36);

console.log(convertToRoman(68));
