// Empty array
let emptyArray = [];

// Array with values
let numbers = [1, 2, 3];
let fruits = ["apple", "banana", "orange"];

// Accessing the elememnts
console.log(fruits[0]); // Output: apple
console.log(fruits[1]); // Output: banana
console.log(fruits[2]); // Output: orange

fruits[1] = "grape";
console.log(fruits); // Output: ['apple', 'grape', 'orange']

numbers.push(4);
console.log(numbers); // Output: [1, 2, 3, 4]

numbers.pop();
console.log(numbers); // Output: [1, 2, 3]

numbers.unshift(0);
console.log(numbers); // Output: [0, 1, 2, 3]

numbers.shift();
console.log(numbers); // Output: [1, 2, 3]

numbers.splice(1, 2);
console.log(numbers); // Output: [1, 3]
