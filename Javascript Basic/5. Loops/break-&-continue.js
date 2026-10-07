for (let i = 1; i <= 200; i++) {
    console.log(i);
    if (i === 20) {
        break;  // break is used for stop the loop when our result got find
    }
}

for (let i = 1; i <= 25; i++) {
    if (i === 20) {
        console.log("Here is Twenty")
        continue;  // continue check karega ki kya ye number 20 ke barabar hai agar rahega to if ka code chalega aur fir i ki value badh jayegi lekin agar nahi hua to niche ka code chalega fir i ki value badhegi

    }
    console.log(i);
}


// #Ques --> Print all the numbers 1 to 100 except numbers which is divisible by 7 

for (let i = 1; i <= 100; i++) {
    if ( (i % 7 === 0) ) {
        console.log("Number is divisible by 7");
        continue;
    }
    console.log(i);
    
}