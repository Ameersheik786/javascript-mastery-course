/* 
Loops are used to repeat a block of code multiple times until a certain condition is met. 
In JavaScript, there are several types of loops, including 'for', 'while', and 'do...while' loops.

*/

/* 
 1. For Loop:
 A 'for' loop is used when the number of iterations is known beforehand. 
 It consists of three parts: initialization, condition, and increment/decrement.

    Example:
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }



*/

for (let i = 0; i < 5; i++) {
    console.log(i);
}

for (let j = 10; j > 0; j -= 2) { // j =10; 10 > 0; 10 = 10 - 2
    console.log(j);
}

for (let k = 1; k <= 16; k *= 2) { // k = 1; 1 <= 16; 1 = 1 * 2
    console.log(k);
}



/* 2. While Loop
    A 'while' loop is used when the number of iterations is not known beforehand. It continues to execute as long as the specified condition is true.

    analogy to "as long as"

    real world example:
    1."As long as there are items in the shopping cart, keep checking out."
    2."As long as it is raining, keep carrying an umbrella."
    3. "As long as the battery is not full, keep charging the phone."

    Example:
    let i = 0;
    while (i < 5) {
        console.log(i);
        i++;
    }

*/

let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}

let n = 20;

while (n > 0) {
    console.log(n);
    n -= 3;
}

/* 3. Do...While Loop
    A 'do...while' loop is similar to a 'while' loop, but it guarantees that the code block will be executed at least once before checking the condition.

    Example:    
    let i = 0;
    do {
        console.log(i);
        i++;
    } while (i < 5);

*/

let l = 10;

do {
    console.log(l);
    l++;
} while (l < 5);


/* 

    1.Break keyword
        
    2.Continue keyword

*/

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Exit loop when i is 5
  }
  if (i % 2 !== 0) {
    continue; // Skip even numbers
  }
  console.log(i); // Logs odd numbers less than 5
}