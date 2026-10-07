// Q.no 10 --> The words Count how many vowels are containing

let sen2 = "A quick brown fox jumps over a lazy dog";
let sen = sen2.toLowerCase();
let counter = 0;

for (i = 0; i < sen.length; i++) { // yaha par hum i ko 0 se start kar rahe hain q ki jab .length function use karte hain to wo indexing 0 se start karta hai
    if (sen[i] === "a" ||
        sen[i] === "i" ||
        sen[i] === "o" ||
        sen[i] === "e" ||
        sen[i] === "u"
    ) {
        counter++;
    }
}

console.log(`There are ${counter} vowels in this sentence`);


// Q. no 11 --> count how many digit are in this number

let num = 5649861326; // --> 0
let count = 0; // --> 10

while (num > 0) {
    count++;
    num = Math.floor(num / 10); // math.floor ek function jo ki division ke baad point ke baad wale numbers ko hata deta hai jaise after any math operation result = 9.324; then math.floor lagane ke baad result = 9;
}
console.log(count);