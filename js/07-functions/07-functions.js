// Lesson 7 Exercises - Functions
console.log(`Lesson 7 Exercises - Functions
`);

// 7a. Create a function called 'greet' that displays the message 'Hello!' in the console. Call / run this function a few times using: greet();
function greet() {
  console.log(`Hello!`);
}

// 7b. Continuing from 7a, add a parameter called 'name' to the 'greet' function and display the message: 'Hello $[name]!'
// Call the function a few times with different names: greet('Simon');
function greet(name) {
  console.log(`Hello ${name}`);
}

// 7c. Try calling greet() without a name (it will display 'Hello undefined!'). Modify the function so that if 'name' is undefined, it will display 'Hi there!' instead.
function greet(name) {
  if (name === undefined) {
    console.log(`Hi there!`);
  } else {
    console.log(`Hello ${name}`);
  }
}
greet();

// Return - gets a value out of a function
// Parameter - puts a value into a function
