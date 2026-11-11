let arr = [6, 7, 10, 2, 65];

// map function hum tabhi use karte hain jab hame ek naya array banana ho purane array ke basis pe

// map dikhte hi sath mind me ek blank array bana lena hai

let newarr = arr.map(function (val) {
    return 12; // ab ek array hame milega jisme bas har element ke jagah pe 12 likha rahega 
})

console.log(newarr);


let arr2 = [81, 67, 23, 2, 6];
let newarr2 = arr2.map(function (val) {
    if (val >= 10) return val; // here it checks for every elment of array, and if value is greater than 10 then it return that element but when condition will false then it returns undefined.
})
console.log(newarr2);


let filter_arr = [1, 2, 3, 4, 5, 6, 7, 8];
let newFilterArr = filter_arr.filter(function (val) {
    if (val > 4) return true; // ye ek naya array return karega 
})
console.log(newFilterArr);


/* Reduce --> Reduce array ke sare element pe operation karke usko ek single value me convert kar deta hai*/

let RedArr = [1, 2, 3, 4, 5, 6, 7];
let ResultRedArr = RedArr.reduce(function (acumalator, val) {
    return acumalator + val;
}, 0)
console.log(ResultRedArr);