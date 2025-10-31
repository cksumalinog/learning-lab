function convertLength(length, from, to) {
  if (from === "miles" && to === "km") {
    return `${length * 1.6} km`;
  } else if (from === "km" && to === "miles") {
    return `${length / 1.6} miles`;
  } else if (from === to) {
    return `${length} ${to}`;
  }
}

console.log(convertLength(2, "miles", "km"));
console.log(convertLength(3.2, "km", "miles"));
console.log(convertLength(3.2, "km", "km"));
