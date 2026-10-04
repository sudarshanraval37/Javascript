
// Logical operator


// console.log(true && true);
// console.log(true && false);
// console.log(false && false);

// console.log(true || true);
// console.log(true || false);
// console.log(false || false);

useremail = "sudarshan@gmail.com";
password = "123";

enteremail = "sudarshan@gmail.com";
enterpass = "1203";

if (enteremail === useremail && enterpass === password) {
    console.log("Logged in succssfully");
}
else {
    console.log("email or password is incorrect");
}


// unary operator --> those opertor is applicable on single values/one values
let a = 12;
++a;
console.log(a)

let a1 = 2;

console.log(a1++);

// Ternary operator --> used to write conditional things but in different ways

113 > 13 ? console.log("yuppp") : console.log("naahhh!");

// typeof operator 

/*
let num;
console.log(typeof 12);
console.log(typeof true);
console.log(typeof "raval");
console.log(typeof num);
console.log(typeof null); 
*/

// instanceof operator --> it tells that the value is related to or child of datatype of not (it always word with reference values)

let ar = [];
let obj = {};
let fun = function(){};
console.log(ar instanceof Array);
console.log(obj instanceof Object);
console.log(fun instanceof Function);

