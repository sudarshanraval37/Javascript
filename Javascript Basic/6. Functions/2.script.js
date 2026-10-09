// Default Parameter --> jab hum koi function banate hain with parameter, but when we call the function aur hum agar waha pe value nahi dete hain (argument pass nahi karte hain) then uska value kuch NaN type ka na aa jaye isiliye hum function declare karte samay hi parameter me koi value daal dete hain. For eg ->

function add(v1 = 0, v2 = 0) {
    console.log(v1 + v2);
}

add("Sudarshan ", "Raval");



// Rest and Spread 
// aisa krne pe ye function ek array return karega,

function restt(...hello) {
    console.log(hello);
}

restt(1, 2, 3, 4, 5, 6, 7, 8, 9);

// Rest --> jab hum kisi fun me bahut sare argument pass karenge tb hume utne hi parameter pass karne padenge, isi se bachne ke liye, hum rest ka use karte hain, agar ... function ke parameter ke jagha pe likh hua ho usko hum rest operator kahenge 

// jab hum ksiis fun me bahut sare argument pass karenge tb hame utne hi parameter pass karne padenge, isi se bachne ke liye, hum rest ka use karte hain, agar .. function ke paramter ke jagha pe likha hua hai 

// isi hum aise bhi likh sakte hain 

function r(a, b, c, ...val) {
    console.log(a, b, c, val);
}

r(1, 2, 3, 4, 5, 6);


// First class functions --> Functions ko value ki tarah treat kr sakte hain

function f1(fnc) {
    fnc();
}
f1(
    function () {
        console.log("Hey Raval");
    }
);



function test(fn) {
    console.log("Start");
    fn();
    console.log("End");
}

let a = function () {
    console.log("Hello");
};

test(a);


// HOF Higher order function --> Waisa function jo apne parameter me koi function accept kare ya fir waisa function jo koi function return kare 

function abc() {
    return function () {
        console.log("hof");
    }
}

abc()();

/* ------------------------------------------------------ */

// Pure vs impure function 
// aisa fnc jise call krne par ya jo fnc bahar ki kisi bhi value ko na badle use pure function kahte hain for eg -
let b = 12;
function pure() {
    console.log("Hello pure");
}
pure();

// aisa fnc jise call krne par ya jo fnc bahar ki value ko change kar de use impure function kahte hain for eg -

function impure() {
    return b++;
}
impure();
console.log(b);

/* ------------------------------------------------------ */

// Closures --> ek fnc jo return kare koi aur function aur return kiya hua function apne parent function ka koi varible ko use karna chaiye 

function par() {
    let vv = 19;
    return function child() {
        console.log(vv);
    }
}

par()();

/* ------------------------------------------------------ */

// Lexical Scopping --> jab bhi hum koi function ke andar multiple function banate hain to sabse bahari fnc me bana hua variable ka use hum us bahari function me kahi bhi kar sakte hain uske andar tak, agar koi variable child fnc ke andar bana hua hai to us varible ka use bhi hum usi child function ke andar kar sakte hain uske bahar nahi, aur jitne bhi area me us varible ka use hoga uska hum lexical scopping hoga

function par2() {
    let a = 1;
    return function child1() {
        let b = 2;
        return function child2() {
            let c = 3;
        }
    }
}

/* ------------------------------------------------------ */

// ⚡ IIFE – Immediately Invoked Function Expression

(function () {
    console.log("this function run immediately!");
})();


/* ------------------------------------------------------ */

// Hositing : Differences b/w function statement/declartion and function expression

dec();






function dec() {
    console.log("This is funtion declartion or statement");
}

// the function which is written above, allows hoisting but 

exp();


let exp = function () {
    console.log("This is function expression and this occurs hoisting when function calls before its initilization");
}
