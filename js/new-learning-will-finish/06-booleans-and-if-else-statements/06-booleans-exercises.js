// 6.a
// 6.b
// 6.c
const name = "Kenzo";
let hour = 7;
if (hour > 6 && hour < 12) {
  console.log(`Good morning ${name}!`);
} else if (hour > 12 && hour < 17) {
  console.log(`Good afternoon ${name}!`);
} else {
  console.log(`Good night ${name}!`);
}

// 6.d
// 6.e
let age = 2;
const isHoliday = false;
// && has a higher priority than || so for
// this to work correctly, we need to add
// brackets () around the || check to make
// sure that it gets done first.
if ((age <= 6 || age >= 65) && !isHoliday) {
  console.log("Discount");
} else {
  console.log("No discount");
}

// 6.f
const randomNum = Math.random();
const result = randomNum < 0.5 ? "heads" : "tails";
console.log(result);

// 6.g
// 6.h
//if (randomNum < 0.5) {
//  result = "heads";
//} else {
//  result = "tails";
//}

// 6.i
const guess = "heads";
console.log(guess === result ? "You win!" : "You lose!");
//if (guess === result) {
//  console.log("You win!");
//} else {
//  console.log("You lose!");
//}
// 6.j
