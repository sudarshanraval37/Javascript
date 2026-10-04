// Switch case 

switch (85) {
    case 1:
        console.log("Good Morning");
        break;
    case 2:
        console.log("Good Evening");
        break;
    case 3:
        console.log("Good Night");
        break;
    default:
        console.log("Hello")
}

// grade question using switch case 

function showgrade(num) {

    switch (true) {

        case num <= 100 && num >= 90:
            return "Grade : A++";

        case num <= 89 && num >= 80:
            return "Grade : A";

        case num <= 79 && num >= 70:
            return "Grade : B";

        case num <= 69 && num >= 60:
            return "Grade : C";

        case num <= 59 && num >= 50:
            return "Grade : D";

        case num <= 49 && num >= 33:
            return "Grade : E";

        case num <= 33 && num >= 0:
            return "Grade : Fail";

        default:
            return "Invalid Marks";
    }
}

console.log(showgrade(88));