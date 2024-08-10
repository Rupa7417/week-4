// Create an object literal for the book
let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 218
};

// Function to print the book's details
function printBookDetails(book) {
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log(`Pages: ${book.pages}`);
}

// Call the function to print the book's details
printBookDetails(book);

//Using the 'this' Keyword in an Object Method:
let person = {
    name: "Alice",
    age: 30,
    introduce: function() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
};

// Call the introduce method
person.introduce();


//Constructor Function for Car Objects with Prototype Method://
// Constructor function for Car objects
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

// Adding a method to the Car prototype to print car details
Car.prototype.printDetails = function() {
    console.log(`Car: ${this.year} ${this.make} ${this.model}`);
};

// Create a new Car object
let myCar = new Car("Toyota", "Corolla", 2022);

// Call the printDetails method
myCar.printDetails();


//Creating an ES6 Class for Animal:
// ES6 Class for Animal
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    // Method to print animal details
    printDetails() {
        console.log(`Animal: ${this.name} (${this.species})`);
    }
}

// Create an instance of the Animal class
let myAnimal = new Animal("Leo", "Lion");

// Call the printDetails method for the animal
myAnimal.printDetails();


