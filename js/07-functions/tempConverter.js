function greet(name) {
  if (name) {
    console.log(`Hello ${name}`);
  } else if (!name) {
    console.log(`Hi there!`);
  }
}

//greet("kenzo");

function convertToFahreinheit(celcius) {
  return (celcius * 9) / 5 + 32;
}
console.log(convertToFahreinheit(25));

function convertToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
console.log(convertToCelsius(86));

function convertTemperature(degrees, unit) {
  if (unit === "C") {
    const result = convertToCelsius(degrees);
    return `${result}C`;
  } else {
    const result = convertToFahreinheit(degrees);
    return `${result}F`;
  }
}
console.log(convertTemperature(25, "F"));
console.log(convertTemperature(86, "C"));
