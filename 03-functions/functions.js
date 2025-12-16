/* 
    Functions
    - Functions are reusable blocks of code that perform a specific task.
    - They help in organizing code, improving readability, and reducing redundancy.
    - Functions can take inputs (parameters) and can return outputs (return values).

    Syntax:
    function functionName(parameters) {
        // Function body
    }
*/

/* Traditional Function */

// Why need functions?
// Without functions, we would have to repeat code multiple times.


// let name1 = "Alice";
// let name2 = "Bob";
// let name3 = "Charlie";
// let name4 = "David";
// console.log(`Hello, ${name1}!`);
// console.log(`Hello, ${name2}!`);
// console.log(`Hello, ${name3}!`);
// console.log(`Hello, ${name4}!`);


function greet(name){
    console.log(`Hello, ${name}!`);
}   

greet("Alice");
greet("Bob");
greet("Charlie");
greet("David");


/* Function with Return Value */
function add(a, b) {
    return a + b;
}

let sum = add(5, 3);
console.log(`The sum is: ${sum}`); // Outputs: The sum is: 8

let total = add(10, 15);
console.log(`The total is: ${total}`); // Outputs: The total is: 25

let result = add(7, 2);
console.log(`The result is: ${result}`); // Outputs: The result is: 9


/* Function without Parameters */
function sayHello() {
    console.log("Hello, World!");
}

sayHello(); // Outputs: Hello, World!


/* Function with Default Parameters*/

function multiply(a, b = 2) {
    return a * b;
}

let product = multiply(5);
console.log(`The product is: ${product}`); // Outputs: The product is: 10

let resultMultiply = multiply(3, 4);
console.log(`The result is: ${resultMultiply}`); // Outputs: The result is: 12


