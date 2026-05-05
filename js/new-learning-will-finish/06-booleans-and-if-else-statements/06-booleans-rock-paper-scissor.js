console.log("&& operator");
console.log(true && true);
console.log(true && false);
console.log(0.2 >= 0 && 0.2 < 1 / 3);

console.log("|| operator");
console.log(true || false);

console.log("! operator");
console.log(!true);

// Falsy Values - false, 0, '', NaN(Not a number), undefined, null
//
if (0) {
  console.log("truthy");
}

const cartQuantity = 5;
if (cartQuantity) {
  console.log("cart has products");
}

console.log(!0);
console.log("text" / 5);
let variable1;
const variable2 = undefined;
console.log(variable1);
console.log(variable2);

// ternary operator
const result = true ? "truthy" : "falsy";
console.log("result");
// ternary operator shortcut
//if (true){
//  'truthy'
//}else {
//  'falsy'
//}

//guard operator
false && console.log("hello");
const message = 5 && "hello";
console.log(message);
//guard operator shortcut
// let message;
// if(condition){
//  message = 'hello'
//}

//default operator
const currency = undefined || "USD";
console.log(currency);
//default operator shortcut
//let currency;
//if(!condition){
//  currency = 'USD'
//}
