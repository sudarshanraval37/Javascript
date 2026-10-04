// premitive data types --> aisi saari values jinko copy karne par ek real copy mil jaye for example - string, boolean, number, bigint, undefined, null, symbol

// reference data types --> inko copy karne par real copy nahi milegt balki refrence mil jata hai parent ka. for example - array, object, function
// ye brackets ke andar rhta hai 


// Example of premititve data types
let a = 12;
let b = a;

a = a +5 ;

console.log("a = ", a);
console.log("b = ", b);


// Example of reference data types 
let arr1 = [1, 2, 3];
let arr2 = arr1;

arr1.push(4);

console.log("First array = ", arr1);
console.log("Second array = ", arr2);
