const product = {
  name: "basketball",
  price: 2095,
};
console.log(product);

product.price += 500;
console.log(product.price);

product["delivery-time"] = "3 days";
console.log(product);

const product01 = {
  name: "Laptop",
  price: 2000,
};
const product02 = {
  name: "Desktop",
  price: 5000,
};

function comparePrice(product01, product2) {
  if (product01.price < product02.price) {
    return product01;
  } else {
    return product02;
  }
}
console.log(comparePrice(product01, product02));

/*
function isSameProduct(product01, product02) {
  var isEqual = product01 === product02;
  return isEqual;
}
console.log(isSameProduct(product01.name, product02.name));
*/

function isSameProduct(product01, product02) {
  if (
    product01.price === product02.price &&
    product01.name === product02.name
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(isSameProduct(product01, product02));

let text = "Good Morning";
console.log(text.toLowerCase());

console.log("test".repeat(2));

const myFruit = {
  name: "apple",
  color: "red",
  quantity: 5,
};
console.log(myFruit.name);

myFruit.quantity = 8;
myFruit.isRipe = true;
console.log(myFruit);
