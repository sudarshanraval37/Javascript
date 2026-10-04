/* 
function grade(marks) {

    if (marks <= 32 && marks >= 0) {
        console.log("Grade : Fail")
    }
    else if (marks <= 59 && marks >= 0) {
        console.log("Grade : D")
    }
    else if (marks <= 69 && marks >= 0) {
        console.log("Grade : C")
    }
    else if (marks <= 79 && marks >= 0) {
        console.log("Grade : B")
    }
    else if (marks <= 89 && marks >= 0) {
        console.log("Grade : A")
    }
    else if (marks <= 100 && marks >= 0) {
        console.log("Grade : A+")
    }
    else {
        console.log("Invalid marks")
    }
}

grade(95);
*/

function showgrade(num) {
    if (num <= 100 && num >= 90) return "Grade : A++";

    if (num <= 89 && num >= 80) return "Grade : A";

    if (num <= 79 && num >= 70) return "Grade : B";

    if (num <= 69 && num >= 60) return "Grade : C";

    if (num <= 59 && num >= 50) return "Grade : D";

    if (num <= 49 && num >= 33) return "Grade : E";

    if (num <= 33 && num >= 0) return "Grade : Fail";
    
    return "Invalid Marks"

}

console.log(showgrade(58));