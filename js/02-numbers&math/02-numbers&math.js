/* Order of operations
1. (parenthesis)
2. * & /
3. + & -
It reads from left to right
*/

console.log(10.9 * 2 + 20.95);
console.log(10.9 * 2 + 20.95 + 4.99); //with shipping fee
console.log((10.9 * 2 + 20.95 + 4.99) * 0.1); // with tax

/*
Basketball = 20.95
T-shirt = 7.99 (2)
Tax = 10%
*/
console.log(20.95 + 7.99 * 2);
console.log((20.95 + 7.99 * 2) * 0.1); // with tax

console.log(20.95 + 7.99); // computers have a problem with floats/decimals numbers, it is inaacurate

// best practice to avoid inaccuracies is to convert the money into cents

console.log((2095 + 799) / 100); // now it only has 2 decimals, it rounds off

// This is how to round off numbers to its nearest integer/who number
console.log(Math.round(2.2));
console.log(Math.round(2.8));

console.log(((2095 + 799) * 0.1) / 100);
console.log(Math.round((2095 + 799) * 0.1) / 100); // this is to avoid the 3 decimals in the previous code. math round the cents form of the money after that convert it back to its orignal value which is dollar
