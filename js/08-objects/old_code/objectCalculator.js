/*
const object = {
  name: "Kenzo",
  age: 19,
  function() {
    console.log("Hello");
  },
};

console.log(JSON.stringify(object));

const jsonString = JSON.stringify(object);
console.log(JSON.parse(jsonString));
console.log(JSON.parse(JSON.stringify(object)));
*/

let calculation = localStorage.getItem("Calculation") || "";

function updateCalculation(value) {
  calculation += value;
  console.log(calculation);
  localStorage.setItem("Calculation", calculation);
}
