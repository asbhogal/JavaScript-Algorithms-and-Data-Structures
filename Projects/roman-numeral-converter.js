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