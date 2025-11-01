const product = {
  name: "socks",
  price: 1090,
};

console.log(product);
console.log(product.name);
console.log(product.price);

product.name = "Cotton socks";
console.log(product.name);

product.date = "01-09-25";
console.log(product);

delete product.date;
console.log(product);
