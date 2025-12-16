// Switch Case Statement
/* The switch case statement is used to execute one block of code among multiple options based on the value of a variable or expression.

 */

// Syntax:
/*
switch (expression) {
    case value1:
        // Code to be executed when expression is equal to value1
        break;
    case value2:
        // Code to be executed when expression is equal to value2
        break;
    ...
    default:
        // Code to be executed when expression does not match any case
}
*/  


// Example:

let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;

    case 3:
        dayName = "Wednesday";
        break;

    case 4:
        dayName = "Thursday";
        break;

    case 5:
        dayName = "Friday";
        break;      
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}
console.log("Today is " + dayName);

