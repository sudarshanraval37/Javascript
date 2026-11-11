let arr = [1, 2, 54, 4, 58, 11, 0];
arr.sort(function (a, b) {
    return a - b; // agar b-a karenge to decending order me sort ho jayega and one important notes that ki sort always accept a function in it.
})

console.log(`sorted array = ${arr}`)