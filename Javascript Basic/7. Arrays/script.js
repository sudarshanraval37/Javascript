console.log("Arrays");

let arr = [12, 50, 30, 23]; // initilization an array

console.log(arr[2]); // Accessing an array element 

/* -----------------------------------------------  */

// Modifiying an array

const arr2 = [7, 4, 3, 2];
arr2[3] = 6;
console.log(arr2);

/* -----------------------------------------------  */

// Operations on array

let arr3 = [1, 2, 3, 4];
arr3.push(5);
console.log(arr3);

arr3.pop();
console.log(arr3);

arr3.shift(); // Removes value from an array from front
console.log(arr3);

arr.unshift(69); // Add elements to an array from front
console.log(arr3)

let secarr = [10, 20, 30, 40, 50];
secarr.splice(2, 2); // splice removes value from an array from middle or where we want, there is 2, 2 in the splice function parameter, it means removes value from 2nd index till 2 elements.
console.log(secarr);

let arr4 = [11, 22, 33, 44, 55];
let newarr4 = arr4.slice(2, 4); // slice return a new array from an existing array the array size can be customized by us, there is 2, 4 in the slice function parameter, it means from 2nd index to 4th element (not 4th index) return a new array.
console.log(newarr4);

let revarr = [1, 2, 3, 5, 6];
revarr.reverse(); // This function reverse an array
console.log(revarr);