// Q 01 --> Stop at first multiple of 7

for (let i = 1; i <= 100; i++) {
    console.log(i)
    if (i % 7 === 0) {
        break;
    }
}

// Q 2  --> Skip every multiply of 3 b/w 1 to 20

console.log("Question number 2");

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}

// Q.3 --> Print first 5 odd number b/w 1 to 100 and stop the loop, use if, continue, and a counter+break;

console.log("Q. no 03:");


let c = 0;
for (i = 1; i <= 100; i++) {
    if (i % 2 === 1) {
        c++;
        console.log(i);

    }
    if (c === 5) break;
}