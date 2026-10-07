//For loop

// 1-30

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Writing table using for loop 

for (let i = 1; i <= 10; i++) {
    console.log(`17 * ${i} = ${i * 17}`);
}

// Printing even number till 20 using for loop

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// calculate sum of all odd number b/w 1 to 100 number using for loop

let sum = 0;
for (let i = 1; i <= 100; i += 2) {
    sum = sum + i;
}

console.log(`Sum of odd number b/w 1 to 100 = ${sum}`);