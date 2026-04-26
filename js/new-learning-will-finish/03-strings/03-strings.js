console.log(`Hello` + ` pogi`); //concatenation is when combining strings together
console.log(typeof (`Hello` + 3));
console.log("$" + (2095 + 799) / 100);
console.log(`Items (` + (1 + 1) + `): $` + (2095 + 799) / 100);
//alert(`Items (` + (1 + 1) + `): $` + (2095 + 799) / 100);

// 3 ways to create a string
// 'String'
// "String"
// `String` - template strings (interpolation & multiline strings)
// \ escape characters
console.log("String's");
alert("Some\ntext");
console.log(`Items (${1 + 1}): $${(2095 + 799) / 100}`);
console.log(`Some
    Text`);
