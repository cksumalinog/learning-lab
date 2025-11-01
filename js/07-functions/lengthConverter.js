function convertLength(length, from, to) {
  if (from === "miles" && to === "km") {
    return `${length * 1.6} km`;
  } else if (from === "miles" && to === "feet") {
    return `${length * 5280} ft`;
  } else if (from === "km" && to === "miles") {
    return `${length / 1.6} miles`;
  } else if (from === "km" && to === "feet") {
    return `${length * 3281} ft`;
  } else if (from === "feet" && to === "miles") {
    return `${length / 5280} miles`;
  } else if (from === "feet" && to === "km") {
    return `${length / 3281} km`;
  } else if (from === to) {
    return `${length} ${to}`;
  } else if (from !== "km" && from !== "feet" && from !== "km") {
    return `Invalid unit: ${from}`;
  } else if (to !== "km" && to !== "feet" && to !== "km") {
    return `Invalid unit: ${to}`;
  }
}

console.log(convertLength(5, "miles", "km"));
console.log(convertLength(3.2, "km", "miles"));
console.log(convertLength(3.2, "km", "km"));
console.log(convertLength(5, "miles", "feet"));
console.log(convertLength(10560, "feet", "miles"));
console.log(convertLength(5, "km", "feet"));
console.log(convertLength(10499.2, "feet", "km"));
console.log(convertLength(10499.2, "lbs", "km"));
console.log(convertLength(10499.2, "km", "liter"));
