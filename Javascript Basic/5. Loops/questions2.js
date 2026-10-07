// Q 06 --> Find the sum of number 1-100 using a loop

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i

}
console.log("Sum of 1 to 100 = ", sum);

// Q 07 --> Print all the number 1 to 50 which is divisible by 3

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

// Q 08 --> Ask the user for a number and print each number from 1 to that number wheather it is even or odd 

// let userNum = prompt("Enter your number : "); // if we want to take input from user then use prompt function

let userNum = 20;
for (let i = 1; i <= userNum; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    }
    else {
        console.log(`${i} is odd`);
    }
}

// Q 09 --> Count how many number b/w 1 to 100 is divisible by 3 and 5

let count = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} is divisible by 3 and 5`);
        count++;
    }
}

console.log(`${count} numbers are divisible by 3 and 5 both`);



