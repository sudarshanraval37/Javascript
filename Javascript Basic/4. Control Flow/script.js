// Control Flow
// If-else, if else-if else
// switch case
// early return patern



// early return pattern
function getVal(val) {
    if (val < 25) return "Grade D";
    else if (val < 50) return "Grade C";
    else if (val < 75) return "Grade B";
    else return "Grade A";
}

console.log(getVal(56));