// Function basic 
// this is called function declartion



// Function Statement

function yearWish(year) {
    console.log("Happy new year", year);
}

yearWish(2027);





// Another method to create a function [function expression]
// [jab hum aise karke function create karte hain to variable ka naam hi funtion ka naam ho jata hai aur hume jab v function ko call karna hota hai hum varible ke through hi call karte hain and this is called funciton expression]

// Function Expression

let fun = function () {
    console.log("Hey this function is created using variable");
}


fun();



// Fat Arrow function -->

let fnc = () => {
    console.log("Hello Engineers!");
}

fnc();



// Function Parameter and aurguements
// This is --> Parameter
function hello(name) {
    console.log(`Good Morning ${name}`);
}

// These are 

//   arguements
hello("Vikki");
hello("Vinit");
hello("Raval");


function add(v1, v2) {
    console.log(v1 + v2);
}

add(22, 33);


