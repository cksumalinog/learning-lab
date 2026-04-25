// Order of operations (Operator precedence)
// () Prioritized what is inside the brackets first
// * & / are done first
// + & - are done after
// Calculate from left to right if the same precedence are existing

console.log(20.95 + 7.99 * 2);
console.log(36.93 * 0.1);
console.log((20.95 + 7.99 * 2) * 0.1);
console.log((2095 + 799) / 100); // when working in money best practice is do the calculations in cents then convert back to dollars.

// rounding off the number
console.log(Math.round(2.2));
console.log(Math.round(2.8));
console.log(((2095 + 799) * 0.1) / 100);
console.log(Math.round((2095 + 799) * 0.1) / 100);
