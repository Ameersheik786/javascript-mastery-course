// const heading = document.createElement("h1"); // this temporarily creates an h1 element in memory

// heading.textContent = "Hello, DOM Manipulation!"; // setting the text content of the h1 element

// document.body.appendChild(heading); // appending the h1 element to the body of the document

// //append vs appendChild
// // appendChild only allows you to append a single node and it must be a Node object.
// // append allows you to append multiple nodes and strings, and it can handle both Node objects and string values.

// // Example of append
// const paragraph = document.createElement("p");
// const textNode = document.createTextNode(" This is a text node added using append.");
// const anotherText = " This is another string added using append.";

// paragraph.textContent = "This is a paragraph added using append.";
// document.body.append(   paragraph, textNode, anotherText); // appending multiple items using append


const container = document.getElementById("main"); // selecting the div with id "main"
const description = document.querySelector(".description"); // selecting the first element with class "description"
const descriptionAll = document.querySelectorAll(".description"); // selecting all elements with class "description"
const descriptionByClass = document.getElementsByClassName("description"); // selecting all elements with class "description"
const descriptionByTag = document.getElementsByTagName("p"); // selecting all <p> elements
const subDescription = document.querySelector(".sub-description"); // selecting the element with class "sub-description"

console.log(container); // logs the div with id "main"
console.log(description); // logs the first element with class "description"
console.log(descriptionAll); // logs a NodeList of all elements with class "description"
console.log(descriptionByClass); // logs an HTMLCollection of all elements with class "description"
console.log(descriptionByTag); // logs an HTMLCollection of all <p> elements

console.log(typeof descriptionByClass)