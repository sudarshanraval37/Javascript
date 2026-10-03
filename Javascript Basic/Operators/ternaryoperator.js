// ternary operator

let email = "raval@gmail.com";
let pass = 1234;

let given_email = "raval@gmail.com";
let given_pass = 1234;

let status = given_email === email && given_pass === pass ? "Logged in" : "Incorrect pass or email id";

console.log(status);

let n = 5;
let result = n++ + ++n;
console.log(result);