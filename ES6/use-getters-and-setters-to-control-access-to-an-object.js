// Use the class keyword to create a Thermostat class. The constructor accepts a Fahrenheit temperature. In the class, create a getter to obtain the temperature in Celsius and a setter to set the temperature in Celsius. Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit, and C is the value of the same temperature in Celsius. Note: When you implement this, you will track the temperature inside the class in one scale, either Fahrenheit or Celsius.

// This is the power of a getter and a setter. You are creating an API for another user, who can get the correct result regardless of which one you track. In other words, you are abstracting implementation details from the user.

// Only change code below this line

class Thermostat {
  constructor(fahrenheitTemp) {
    this.fahrenheitTemp = fahrenheitTemp;
  }
  get temperature() {
    return (5 / 9) * (this.fahrenheitTemp - 32);
  }
  set temperature(celsiusTemp) {
    this.fahrenheitTemp = (celsiusTemp * 9.0) / 5 + 32;
  }
}

// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp);

thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

console.log(temp);

/*

LINE 15 - SINCE THE CELSIUS TEMP IS ALREADY KNOWN, DOING CELSIUS AGAIN MAKES NO SENSE. HERE, THE SETTER IS JUST THAT - SETTING THE FAHRENHEIT VALUE TO THE PROPERTY (this.fahrenheitTemp) FROM THE CELSIUS VALUE PASSED IN THE ARGUMENT AND SUBSEQUENT PARAMETER. THIS THEN LEVERAGES THE SUBSEQUENT CALCULATION.

*/
