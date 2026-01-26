// 7a. Create a function called ‘greet’ that displays the message ‘Hello!’ in the console. Call / run this function a few times using: greet();
function greet() {
  console.log(`Hello!`);
}
// 7b. Continuing from 7a, add a parameter called ‘name’ to the ‘greet’ function and display the message: ‘Hello $[name]!’ Call the function a few times with different names: greet('Simon');
function greet(name) {
  console.log(`Hello! ${name}`);
}
// 7c. Try calling greet() without a name (it will display ‘Hello undefined!’). Modify the function so that if ‘name’ is undefined, it will display ‘Hi there!’ instead. (Hint: use an if-statement. Since undefined is a falsy value, you can use: if (Iname) { ... } to check if ‘name’ is undefined).
function greet(name) {
  if (!name) {
    console.log(`Hi there!`);
  } else {
    console.log(`Hello! ${name}`);
  }
}
// 7d. Create a function ‘convertToFahrenheit(celsius)’ that takes a number in degrees Celsius and returns a number in degrees Fahrenheit.
// Formula: Fahrenheit = (Celsius * 9 / 5) + 32
// convertToFahrenheit(25) => 77
function convertToFahrenheit(Celsius) {
  return (Celsius * 9) / 5 + 32;
}
// 7e. Create a function ‘convertToCelsius(fahrenheit)’ that takes a number in degrees Fahrenheit and returns a number in degrees Celsius.
// Formula: Celsius = (Fahrenheit - 32) * 5 / 9
// convertToCelsius(86) => 30
function convertToCelsius(Fahrenheit) {
  return ((Fahrenheit - 32) * 5) / 9;
}
// 7f. Create a function ‘convertTemperature(degrees, unit)’ that takes a number and a unit (‘C’ or ‘F’), and converts it into the other unit.
// convertTemperature(25, 'C’) => '77F'
// convertTemperature(86, 'F’) => '30C’
function convertTemperature(degrees, unit) {
  if (unit === "C" || unit === "c") {
    const result = convertToFahrenheit(degrees);
    return `${result}F`;
  } else if (unit === "F" || unit === "f") {
    const result = convertToCelsius(degrees);
    return `${result}C`;
  } else {
    console.log("Invalid unit of temperature.");
  }
}
console.log(convertTemperature(25, "C"));
console.log(convertTemperature(86, "F"));
