// Lesson 6 Exercises - Booleans and If-Statements
console.log(`Lesson 6 Exercises - Booleans and If-Statements`);

/* 6a. Create a variable called 'hour' and save the current hour of the day (use 24-hour format and save it as a number between 0 and 23). 
  If hour is between 6 and 12, display 'Good morning!' in the console
  If hour is between 13 and 17, display 'Good afternoon!' in the console
  Otherwise, display 'Good night!' in the console
*/
let hour = 7;
if (6 <= hour && hour < 12) {
  console.log(`Good morning!`);
} else if (12 <= hour && hour < 17) {
  console.log(`Good afternoon!`);
} else {
  console.log(`Good night!`);
}

// 6b. Continuing from 6a, try changing the value in the 'hour' variable to make it display different messages.
hour = 20;

// 6c. Continuing from 6a, create a variable called 'name' and save your name inside (as a string). Update the if-statement to display your name in each message. For example: 'Good morning $[name]!'
const name = "Kenzo";
if (6 <= hour && hour < 12) {
  console.log(`Good morning ${name}`);
} else if (12 <= hour && hour < 17) {
  console.log(`Good afternoon ${name}`);
} else {
  console.log(`Good night ${name}`);
}

/* 6d. Imagine an amusement park that has a discount for children (6 years and younger) or seniors (65 years and older). 
  Create a variable 'age' and save a person's age inside.
  Create an if-statement that checks if the person qualifies for a discount. If they do
  display 'Discount' in the console. Otherwise, display 'No discount' in the console.
Note: try to use the || operator in your solution.
Try changing the 'age' variable to display different messages.
 */
const age = 77;
if (6 >= age || age >= 65) {
  console.log("Discount");
} else {
  console.log(`No discount`);
}

/* 6e. Continuing from exercise 6d, let's say the discount is only available if it is not a holiday. Create a variable: const isHoliday = true;
  Update the code so that in order to get a discount, people must meet the age requirement and it is also not a holiday.
  Note: && has a higher priority than || so you may need to use brackets () to control which code gets done first.
  Try changing the value of isHoliday to display different messages.
*/
const isHolliday = true;
if ((6 >= age || age >= 65) && !isHolliday) {
  console.log("Discount");
} else {
  console.log(`No discount`);
}

// 6f. Generate a random number with Math.random(). Save it in a variable.
const randomNumber = Math.random();

/* 6g. Create an if-statement and check:
    • If the number is less than 0.5, then display 'heads' in the console.
    • Else display 'tails' in the console.

    if (randomNumber <= 0.5) {
      console.log(`heads`);
    } else {
      console.log(`tails`);
    }
*/

// 6h. Instead of displaying 'heads' or 'tails' in the console, save the result in a variable called 'result'.
/**
 *let result = ``;
    if (randomNumber <= 0.5) {
      result = "heads";
    } else {
      result = `tails`;
    }
 */

/* 6i. Let's say we're trying to guess the result. Create a variable called 'guess' and save your guess ('heads' or 'tails').
    • If your guess matches the result, display 'You win!' in the console
    • If your guess does not match the result, display 'You lose!'

    const guess = `tails`;
      if (guess === result) {
        console.log(`You win!`);
      } else {
        console.log(`You lose.`);
      }
 */

// 6j. (Challenge) Instead of using if-statements in the previous exercises, try switching them into ternary operators (condition ? A : B).

const result = randomNumber < 0.5 ? "heads" : "tails";

const guess = "heads";
console.log(guess === result ? "You win!" : "You lose!");

// Truthy Values

// Falsy Values
/**
 * false
 * 0
 * '' (empty string)
 * NaN - Not a Number
 * undefined - it doesnt have a value
 * null
 *
 *[Any valus that are not in here are truthy values]
 */

/** Shortcuts for if-statements
 *
 *   - Ternary Operator ? :
 *   - Guard Operator &&
 *   - Default Operator ||
 */

null ? console.log("truthy") : console.log("falsy");
