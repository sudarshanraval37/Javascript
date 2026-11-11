/* --------------------------- */

// Ques 1) Create an array of 3 fruits and print the second fruit

let fruit = ["Banana", "Mango", "Apple"];

console.log(fruit[1]);

// Ques 2) add "Guava" at the end and "Pineapple" in the begining of this array

fruit.push("Pineapple");
fruit.unshift("Guava");
console.log(fruit);


// Ques 3-> Replace "banana" with "kiwi" in the array

let fal = ["Mango", "Pineapple", "Banana"];
fal[2] = "Kiwi";
console.log(fal);

/* --------------------------- */

// Q.4 --> Add "Red" and "Blue" at the index 1

let colors = ["Green", "Magenta"];

colors.splice(1, 0, "Red", "Blue")
// console.log(colors);


/* --------------------------- */

// Ques 5 --> Extract only 3 middle elements from this array

let middle = [1, 2, 3, 4, 5, 6, 7];
let result = middle.slice(2, 5);
console.log(result);


/* --------------------------- */

// Question 6 --> Sort this array alphabetically and then reverse it

let names = ["Zara", "Arjun", "Raval", "Vinit"];

// names.sort()
// console.log(`Sorted array = ${names}`);
// names.reverse();
// console.log(`Reversed array = ${names}`);

console.log(names.sort().reverse());



/* --------------------------- */

// Ques 7 --> Use .map() method to square each number in this array

let sqr = [2, 5, 6, 8, 9];
let resultSqr = sqr.map(function (val) {
    return val * val;
})

console.log(resultSqr);


/* --------------------------- */

// Ques 8 --> Use .filter() method to keep only numbers which is greater than 10

let greater = [2, 5, 11, 22, 65, 6, 7];

let resultGreter = greater.filter((val) => {
    return val > 10;
})

console.log(resultGreter);


/* --------------------------- */

// Ques 09 --> Use .reduce() method to find the sum of this array elements.

let sum = [10, 20, 30];

let resultSum = sum.reduce((acumalator, val) => {
    return acumalator + val;
}, 0);

console.log(resultSum);




/* --------------------------- */

// Ques 10 --> Use .find() method to find first element that is less than 10.

let less = [84, 51, 24, 6, 98, 4];

let resultLess = less.find((val) => {
    return val < 10;
})

console.log(resultLess);



/* --------------------------- */

// Ques 11 --> Use .some() method to check that any student has scores below 35 marks

let mark = [56, 90, 32, 93];

let resultMark = mark.some(val => {
    return val < 35;
});

console.log(resultMark);



/* --------------------------- */

// Ques 12 --> Use .every() to Check that all number in this array is even or not

let even = [2, 4, 6, 8, 123120];

let resultEven = even.every(val => {
    return val % 2 === 0;
})
console.log(resultEven);


/* --------------------------- */

// Ques 13 --> Destructure the array to get firstName and lastName

let fullname = ["Sudarshan", "Raval"];

let [fn, ln] = fullname;

console.log(fn);
console.log(ln);

/* --------------------------- */

// Q.14 --> Merge two array using spread operator

let a = [17, 34];
let b = [51, 68];

let c = [...a, ...b];

console.log(c);



/* --------------------------- */

// Q.15 --> Add "India" to the start of this array using spread operator.

let countries = ["USA", "Russia"];
countries = ["India", ...countries];
console.log(countries);

// Q.15 --> Clone this array properely (not by reference).

let clone = [1, 2, 3];

let cloned = [...clone];
cloned.push(23);
console.log(clone);
console.log(cloned);
