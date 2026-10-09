// Q) Build a BMI Calculator using function

// let res = 0;

function bmi(w, h) {
    let res = w / ((h * h) / 10000)
    if (res < 18.5) {
        console.log("Underweight");
    }
    else if (res >= 18.5 && res <= 24.9) {
        console.log("Normal / Healthy Weight");
    }
    else {
        console.log("Overweight")
    }
    console.log((res).toFixed(2)); // when we use .toFixed(2) then its a function in javascript
    // which round off decimal number to 2 digit 
}

bmi(56, 173);


/* ------------------------------------------------------ */

// Q) Write a code to build a Reusable Discount Calc using HOF
/*
function calc(price, discount) {
    let discountedMoney = 0;
    let actualPrice = 0;
    discountedMoney = price * (discount / 100);
    actualPrice = price - discountedMoney;
    return actualPrice;
}

console.log(`The offer price is : ${calc(100, 15)}rs only-`);*/

function cals(discount) {
    return function (price) {
        return price - price * (discount / 100);
    }
}

let shirt = cals(15);
console.log(shirt(800));

let pant = cals(20);
console.log(pant(500));


/* ------------------------------------------------------ */

// Q) Use IIFE to isolate variables

(function () {
    const password = "sudarshanraval";
    console.log(password);
})();

// console.log(password); // <-- this will give a reference error