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
