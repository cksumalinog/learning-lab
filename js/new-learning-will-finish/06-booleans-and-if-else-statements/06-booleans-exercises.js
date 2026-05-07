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
