// Creating an array of favorite fruits
let favoriteFruits = ["apple", "banana", "mango", "strawberry", "pineapple"];

// Printing the array to the console
console.log(favoriteFruits);

//Accessing and Modifying Array Elements:
// Accessing the first and last elements of the fruits array
let firstFruit = favoriteFruits[0];
let lastFruit = favoriteFruits[favoriteFruits.length - 1];

// Modifying the second element of the fruits array
favoriteFruits[1] = "grapes";

// Printing the updated array and the accessed elements
console.log("Updated favorite fruits array:", favoriteFruits);
console.log("First fruit:", firstFruit);
console.log("Last fruit:", lastFruit);


//Array Methods (push, pop, shift, unshift):
// Demonstrating push, pop, shift, and unshift methods on the fruits array
favoriteFruits.push("orange"); // Add "orange" to the end
favoriteFruits.pop(); // Remove the last element
favoriteFruits.unshift("kiwi"); // Add "kiwi" to the beginning
favoriteFruits.shift(); // Remove the first element

// Printing the array after each operation
console.log("Array after push, pop, shift, and unshift:", favoriteFruits);


//Array Methods (map, filter):

// Create an array of numbers
let number = [1, 2, 3, 4, 5];

// Using map to create a new array with each number squared
let squaredNumber = number.map(num => num * num);

// Using filter to create a new array with only even numbers
let evenNumber = number.filter(num => num % 2 === 0);

// Printing the new arrays
console.log("Squared numbers:", squaredNumber);
console.log("Even numbers:", evenNumber);


// Create an array of numbers
let numbers = [5, 10, 15, 20, 25];

// Use the reduce method to calculate the sum of all numbers in the array
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Print the sum of all numbers
console.log("The sum of all numbers in the array is:", sum);

