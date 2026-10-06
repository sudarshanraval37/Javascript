// Rock paper scissor using Case statement
function rcs2(user, computer) {

    if (user !== "Paper" && user !== "Rock" && user !== "Scissor") {
        return "Enter Valid choice";
    }

    if (computer !== "Paper" && computer !== "Rock" && computer !== "Scissor") {
        return "Enter Valid choice";
    }

    if (user === computer) {
        return "Draw!!";
    }

    switch (user) {
        case "Paper":
            switch (computer) {
                case "Rock":
                    return "User Win !";
                case "Scissor":
                    return "Computer Win !!";
            }
            break;

        case "Rock":
            switch (computer) {
                case "Scissor":
                    return "User Win !";
                case "Paper":
                    return "Computer Win !!";
            }
            break;

        case "Scissor":
            switch (computer) {
                case "Paper":
                    return "User Win !";
                case "Rock":
                    return "Computer Win !!";
            }
            break;
    }
}

let res = rcs2("Paper", "Scissor");
console.log(res);