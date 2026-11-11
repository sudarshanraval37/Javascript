/* Find --> Find array me se element ko find karta hai agar wo element mil jaye to bas simply us element return kar dega, agar wo value array me exist hi nahi karega to undefined return karega */

let arr = [1, 2, 3, 5, 32, 1];
let ResultArr = arr.find(function (val) {
    return val === 1;
})
console.log(ResultArr);

/* Some --> Some checks whole array and if condition satisfies true for any of the element then it returns true, if not then it return false.
*/

let SomeArr = [34, 35, 90, 23];
let ResultSomeArr = SomeArr.some(function (val) {
    return val > 85;
})
console.log(ResultSomeArr);


/* Every --> Every checks whole array and if condition satisfies true for all element of array then it returns true, if not then it return false.
*/

let EveryArr = [34, 35, 90, 23];
let ResultEveryArr = EveryArr.every(function (val) {
    return val > 85;
})
console.log(ResultEveryArr);
