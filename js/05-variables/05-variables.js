// Lesson 5 Exercises - Variables
console.log(`Lesson 5 Exercises - Variables`);

// 5a. Create a <script> element. Inside the <script>, create a variable called 'name', and save your name in this variable (as a string).
const name = `Kenzo`;

// 5b. Continuing from 5a, display the message 'My name is: $[name]' in the console (insert the 'name' variable created in 5a into this message).
console.log(`My name is: ${name}`);

// 5c. At a restaurant, you order 1 coffee ($5), 2 bagels ($3 each), and 1 soup ($9). Calculate the cost and save it in a variable called 'cost'.
const cost = 5 + 2 * 3 + 9;

// 5d. Continuing from 5c, display 'Cost of food: $$[cost]' in the console.
console.log(`Cost of food: $${cost}`);

// 5e. Let's say the restaurant charges a 10% tax. Using the 'cost' variable from 5c, calculate the tax (hint: multiply by 0.1), and save the result in a variable.
const tax = cost * 0.1;

// 5f. Continuing from 5e, display 'Tax (10%): $$[tax]' in the console.
console.log(`Tax (10%): $${tax}`);

// 5g. Continuing from 5f, calculate the total (cost + tax), save it in a variable called 'totalCost', and display the message 'Total cost: $$[totalCost]' in the console.
const totalCost = cost + tax;
console.log(`Total cost: $${totalCost}`);
