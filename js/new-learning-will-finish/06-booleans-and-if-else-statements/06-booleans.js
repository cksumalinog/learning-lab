console.log(typeof true);
console.log(3 > 5);

console.log(5 == "5.00");
console.log(5 === "5.00"); // prefered to check validity and avoid conversion bahaviour.

if (false) {
  console.log("Hello");
} else {
  console.log("Hi");
}

const age = 15;
if (age >= 16) {
  console.log("You can drive");
} else if (age >= 14) {
  console.log("Almost there!");
} else {
  console.log("You can not drive");
}
