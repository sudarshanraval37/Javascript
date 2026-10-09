// Q) Convert this function into an arrow function

function multiple(a, b) {
    return a * b;
}

let mul = (a, b) => {
    return a * b;
}

let result = multiple(2, 4);
console.log(result);

let result2 = mul(2, 2);
console.log(result2);

/* ------------------------------------------------------ */

// Q) Fixed this function using early return 

function checkAge(age) {
    if (age < 18) {
        console.log("You're too young!");
    }
    else {
        console.log("Allowed");
    }
}

function checkAge2(age) {
    if (age < 18) return "Too young";
    return "allowed"
}

console.log(checkAge2(23));

/* ------------------------------------------------------ */

// Q) Pass a function into another function and excute it inside

function main(v) {
    v();
}

main(function () {
    console.log("Vikki Chor");
})

/* ------------------------------------------------------ */

// Q) Understand and guess the output of this code

function outer() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    }
}

let counter = outer();
counter();
counter();
counter();


/* ------------------------------------------------------ */

// Q) Convert this normal function to an IIFE

function change() {
    console.log("Immidiate return value")
}

(function () {
    console.log("Immidiate invoked function expression")
})();