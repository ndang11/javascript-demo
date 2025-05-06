// Difference between paramenters and arguments

//Parameters are variables listed as part of the function definition. They act as placeholders for the values that will be passed to the function when it is called.
//example
function add(x, y) {
  return x + y;
}

//Arguments are the actual values passed to the function when it is called. These values fill the parameters during the function's execution.
//example
add(2, 3);
//Here, 2 and 3 are arguments

// Write the code, one line for each action
// create an empty oject called user
// add the property name with value John
// add the propery surname with value Smith
// Change the value of the name to Pete
// remove the property name from the object

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

console.log(user);

// Write a function call isEmpty that returns true if an object has no property or false otherwise

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

let user = {};
console.log(isEmpty(user)); // true

user.name = "John";
console.log(isEmpty(user)); // false
