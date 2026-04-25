// LESSON 2 EXERCISES - NUMBERS & MATH
console.log("LESSON 2 EXERCISES - NUMBERS & MATH");

// 2a. At t  restaurant, you order 1 soup for 10$, 2 burgers for 8$ each, and 1 ice cream for 5$. Use javscript to calculate the cost of the order
console.log(10 + 8 * 3 + 5);

// 2b. You're at a restaurant with 2 friends (3 people in total) and make the same order as 2a. Calculate how much each person pays.
console.log((10 + 8 * 3 + 5) / 3);

// 2c. calculate the total cost of a toaster ($18.50) and 2 shirts ($7.50 each)
console.log(18.5 + 2 * 7.5);

// 2d. Calculate the 10% tax for the total in the exercise in 2c.
console.log((18.5 + 2 * 7.5) * 0.1);

// 2e Calculate the 20% tax for the total in the exercise in 2c.
console.log((18.5 + 2 * 7.5) * 0.2);

/** Setup: in the Amazon project, go to the home page and add a toaster ($18.99) to your cart so you have 1 basketball, 1 t-shirt, and 1 toaster. Choose $4.99 shipping for the toaster. */

// 2f. Calculate the cost of the products (before shipping and taxes). Hint: calculate in cents to avoid inaccuracies.
console.log((2095 + 799 + 1899) / 100);

// 2g. Calculate the Total before tax.
console.log((2095 + 799 + 1899 + 499) / 100);

// 2h. Calculate the 10% tax exactly. Hint: use Math.round()
console.log(Math.round((2095 + 799 + 1899 + 499) * 0.1) / 100); // 19% tax

// 2i. Calculate Order total at the bottom.
console.log(
  (Math.round((2095 + 799 + 1899 + 499) * 0.1) + (2095 + 799 + 1899 + 499)) /
    100
);
// Finish: after finishing 2i remove the toaster from your cart.

// 2j
console.log(Math.floor(2.8)); //Math.floor() - round down

// 2k
console.log(Math.ceil(2.2)); // Math.ceil() - round up

/* Challenge Exercise
We'll use Javascript to convert temperatures form Celcius (C) to Fahrenheit (F). The formula is:
    - Fahrenheit = (Celsius * 9/5) + 32
    - Celsius = (Fahrenheit - 32) * 5/9
*/

// 2l. The temperature is 25C. Calculate the temperature in Fahrenheit. (77)
console.log((25 * 9) / 5 + 32);

// 2m. The temperature is 86F. Calculate the temperature in Celsius. (30)
console.log(((86 - 32) * 5) / 9);

// 2n. The temperature is -5C. Calculate the temperature in Fahrenheit. (23)
console.log((-5 * 9) / 5 + 32);
