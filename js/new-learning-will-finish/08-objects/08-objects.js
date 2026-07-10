// objects group multiple values together

const product = {
  name: "socks", // the code the left are called property | the code on the right is called value | these are called property-valued pair
  price: 1090,
};
console.log(product);
console.log(product.name); // the syntax product.name called dot notation
console.log(product.price);

product.name = "shoes";
console.log(product);
console.log(product.name);

product.newProperty = true; // adds a new property along with its value
console.log(product);

delete product.newProperty; // delets the property along with its value
console.log(product);

