function rcs(user, comp) {
    if (user === "Rock" && comp === "Paper") return "Computer Win !";
    if (user === "Paper" && comp === "Rock") return "User Win !";
    if (user === "Rock" && comp === "Scissor") return "User Win !";
    if (user === "Scissor" && comp === "Rock") return "Computer Win !";
    if (user === "Scissor" && comp === "Paper") return "User Win !";
    if (user === "Paper" && comp === "Scissor") return "Computer Win !";
    if (user === "Scissor" && comp === "Scissor") return "Draw!";
    if (user === "Paper" && comp === "Paper") return "Draw!";
    if (user === "Rock" && comp === "Rock") return "Draw!";
}

let result = rcs("Paper", "Rock");
console.log(result);

if (result == undefined) {
    console.log("Please enter the valid choice");
}

// Another method to solve this 

function rcs2(user, computer) {
    if (user === computer) return "Draw!!";

    if (user === "Paper" && computer === "Rock") return "User Win !";
    if (user === "Rock" && computer === "Scissor") return "User Win !";
    if (user === "Scissor" && computer === "Paper") return "User Win !";

    if (user !== "Paper" && user !== "Rock" && user !== "Scissor") return "Enter Valid choice";
    if (computer !== "Paper" && computer !== "Rock" && computer !== "Scissor") return "Enter Valid choice";

    return "Computer Win !!";
}

let res = rcs2("Paper", "Scissor");
console.log(res)