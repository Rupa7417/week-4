
function varExample() {
    if (true) {
        var x = 20;
        console.log(x); // Output: 20
    }
    console.log(x); // Output: 20
        x = 10; // Reassignment
    console.log(x); // Output: 10
}


function letExample() {
    let y = 50;
    if (true) {
        let y = 40; // This is a different variable than the one declared outside the block
        console.log(y); // Output: 40
    }
    console.log(y); // Output: 50
    y = 20; // Reassignment
    console.log(y); // Output:  20
}



function constExample() {
    const z = 60;
    // z = 70; // This will throw an error because you cannot reassign a const variable

    const person = {
        name: "Niha",
        age: 18
    };
    person.age = 18; // This is allowed as it's modifying the property, not reassigning the variable

    console.log(person); // Output: { name: "Niha", age: 18 }
}



