const product2 = {
  name: "shirt",
  "delivery-time": "12am",
  rating: {
    stars: 4.5,
    count: 87,
  },
  fun: function function1() {
    console.log("Function inside object");
  },
};
console.log(product2);
console.log(product2.name);
console.log(product2["name"]);
console.log(product2["delivery-time"]);

console.log(product2.rating);
console.log(product2.rating.count);
console.log(product2.rating.stars);

product2.fun();

console.log(JSON.stringify(product2));

const jsonString = JSON.stringify(product2);
console.log(JSON.parse(jsonString));

console.log("hello".length);
console.log("hello".toUpperCase()); // auto-boxing

const object1 = {
  message: "hello",
};
const object2 = object1;

object1.message = "Good Job";
console.log(object1);
console.log(object2);

object2.message = "Bad Job";
console.log(object2);

const object3 = {
  message: "Bad Job",
};
console.log(object3 === object1);

const object4 = {
  message: "Bad Job",
  price: 799,
};
// const message = object4.message;
const { message, price } = object4;
console.log(message, price);

const object5 = {
  //message: message,
  message,
  //method: function function1() {
  //  console.log("method");
  //},
  method() {
    console.log("method");
  },
};
console.log(object5);
object5.method();
