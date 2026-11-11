// Distructuring --> it means ki koi array se elements nikal kar sequentialy koi variable me save ho jayenge.

let arr = [1, 2, 3, 4, 5];
let [a, b, , c] = arr;
console.log(a);
console.log(b);
console.log(c);

/* Spread --> Spread operator array ki copies banane ke liye use hota hai aur agr iske baad jab hum new copied array me kuch bhi changes karenge to usse original array pe ko affect nahi padega */


let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let SpreadArr = [...arr1];

SpreadArr.pop();
console.log(SpreadArr);
console.log(arr1);