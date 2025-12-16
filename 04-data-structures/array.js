/* 
Array Data Structure
An array is a collection of elements identified by index or key. It is a fundamental data structure used to store multiple values in a single variable. Arrays can hold elements of any data type, including numbers, strings, objects, and even other arrays.
    return a * b;
}


*/

const numbers = [1, 2, 3, 4, 5];

const newArray = new Array(1, 2, 3, 4, 5);

// Accessing elements
console.log(numbers[0]);

console.log(numbers[2]);

console.log(numbers[4]);

// Modifying elements
numbers[1] = 10;
console.log(numbers);

// Adding elements => push element at the end
numbers.push(6);
console.log(numbers);

// Removing elements => pop element from the end remove last element
let removedNumber = numbers.pop();

console.log(numbers);
const fruits = ["Apple", "Banana", "Orange"]
for(let i = 0; i <= fruits.length; i++){
    console.log(fruits[i])
}

/* Array Methods */

/* 
 1. push() - Adds one or more elements to the end of an array and returns the new length of the array.
 2. pop() - Removes the last element from an array and returns that element.
 3. shift() - Removes the first element from an array and returns that element.
 4. unshift() - Adds one or more elements to the beginning of an array and returns the new length of the array.
 5. indexOf() - Returns the first index at which a given element can be found in the array, or -1 if it is not present.
 6. slice() - Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
 7. splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
    8. forEach() - Executes a provided function once for each array element.
    9. map() - Creates a new array populated with the results of calling a provided function on every element in the calling array.
    10. filter() - Creates a new array with all elements that pass the test implemented by the provided function.
    11. reduce() - Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

*/

// shift() - Removes the first element 

const fruits2 = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
fruits2.shift();
console.log(fruits2);
console.log(fruits2.indexOf("Orange"));

fruits2.unshift("Pineapple");
console.log(fruits2);
console.log(fruits2.indexOf("Orange"));

console.log(fruits2.indexOf("Papaya")); // -1


//      slice() - Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
const citrusFruits = fruits2.slice(1,4);
console.log(citrusFruits); // ["Banana", "Orange", "Mango"]

const allFruits = fruits2.slice();
console.log(allFruits); // ["Pineapple", "Banana", "Orange", "Mango", "Grapes"]


const  vegetables = ["Carrot", "Broccoli", "Spinach", "Potato", "Cabbage"];

// splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
vegetables.splice(2, 0, "Lettuce", "Cauliflower");
console.log(vegetables); // ["Carrot", "Broccoli", "Lettuce", "Cauliflower", "Spinach", "Potato", "Cabbage"]

vegetables.splice(4, 1); // Remove "Spinach"
console.log(vegetables); // ["Carrot", "Broccoli", "Lettuce", "Cauliflower", "Potato", "Cabbage"]

// forEach() - Executes a provided function once for each array element.
vegetables.forEach(function(veg, index){
    console.log(index + ": " + veg);
});

