console.log(4 > 32);
console.log(3 == "3.000");
console.log(3 === "3.000");
console.log(3 != "3.000"); // compares values only (ignores type)
console.log(3 !== "3.000"); // compares value AND type

if (16 >= 18) {
  console.log("You are old enough");
} else if (19 < 18) {
  console.log("you are near");
} else {
  console.log("too young kiddo");
}

const age = 91;

if (12 < age && age < 18) {
  console.log("you are a teenagar");
}
if (age <= 12) {
  console.log("You are a kid");
} else {
  console.log("youre old");
}

console.log(true || false);
console.log(!false);

if (1) {
  console.log("truthy");
}

const cartQuantity = 1;

if (cartQuantity) {
  console.log("Cart has products");
}

console.log(!0);

console.log("Luffy" / 2);

let pogi;
console.log(pogi);

true ? "truthy" : "falsy";
const result = false ? "truthy" : "Falsy";
console.log(result);

false && console.log("Hi");
const message = true && "Hello";
console.log(message);

const currency = false || "USD";
console.log(currency);

function canEnter(age, hasID, isVIP) {
  if (age >= 18 && hasID) {
    return "Access Granted";
  } else if (isVIP && hasID) {
    return "Access Granted";
  } else if (age < 18) {
    return "Access Denied: Age Restriction";
  } else if (!hasID) {
    return "Access Denied: Invalid ID";
  }
}
console.log(canEnter(20, true, false)); // Access Granted
console.log(canEnter(16, true, false)); // Access Denied: Age Restriction
console.log(canEnter(25, false, true)); // Access Denied: Invalid ID
console.log(canEnter(17, true, true));
