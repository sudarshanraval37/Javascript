var a = 10; // var ek global scope varible hai yaani isko kahi bhi use kr sakte hain aur functional scope bhi hai mtlb ki agar isko kisi function ke andar kahi bhi use karegenge to use pure function me acces kiya jaa sakta hai.


function name() {
    if (true) {
        var user = 23;
    }
    console.log(user); // this is allowed
}
console.log(user); // this is not allowed


name(a);
let b = 12; // let ek block scope variable hai yaani isko agar curly braces ke andar likh denge to wo uske bahar access nahi kiya jaa sakta hai

{
    let age = 18;
    console.log(age); // this is allowed
}

console.log(age); // this is not allowed 

// const is also a block scoped variable