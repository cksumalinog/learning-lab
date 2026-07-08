// 7.a
// 7.b
// 7.c
function greet(name) {
  if (name === undefined) {
    console.log("Hi there!");
  } else {
    console.log(`Hello ${name}!`);
  }
}
greet("Kenzo");
greet("Ysza");
greet("Zeah");
greet();

// 7.d
function convertToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
fahreinheit = convertToFahrenheit(25);
console.log(fahreinheit);
console.log(convertToFahrenheit(25));

// 7.e
function convertToCelsius(fahreinheit) {
  return ((fahreinheit - 32) * 5) / 9;
}
console.log(convertToCelsius(86));

// 7.f
function convertTemperature(degrees, unit) {
  if (unit === "F") {
    const result = convertToFahrenheit(degrees);
    return `${result}F`;
  } else if (unit === "C") {
    const result = convertToCelsius(degrees);
    return `${result}C`;
  } else {
    return "Invalid input!!!";
  }
}
console.log(convertTemperature(25, "F"));
console.log(convertTemperature(86, "C"));

// 7.g
//7.h
function convertLength(length, from, to) {
  if (from === "miles" && to === "km") {
    return `${length * 1.6} ${to}`;
  } else if (from === "km" && to === "miles") {
    return `${length / 1.6} ${to}`;
  } else if (from === "miles" && to === "ft") {
    return `${length * 5280} ${to}`;
  } else if (from === "km" && to === "ft") {
    return `${length * 3281} ${to}`;
  } else if (from === to) {
    return `${length} ${to}`;
  } else if (from !== "km" && from !== "miles" && from !== "ft") {
    return `Invalid unit: ${from}`;
  } else if (to !== "km" && to !== "miles" && to !== "ft") {
    return `Invalid unit: ${to}`;
  }
}
console.log(convertLength(50, "miles", "km"));
console.log(convertLength(32, "km", "miles"));
console.log(convertLength(50, "miles", "miles"));
console.log(convertLength(5, "miles", "ft"));
console.log(convertLength(5, "km", "ft"));
console.log(convertLength(5, "km", "ft2"));
