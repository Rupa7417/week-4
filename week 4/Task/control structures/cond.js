 //Conditionals (if, else if, else):
let number = 5;

if (number > 0) {
    console.log(`${number} is positive.`);
} else if (number < 0) {
    console.log(`${number} is negative.`);
} else {
    console.log(`${number} is zero.`);
}


//Switch Statement:
let dayOfWeek = "Monday";

switch (dayOfWeek) {
    case "Monday":
        console.log("It's the start of the week!");
        break;
    case "Friday":
        console.log("TGIF!");
        break;
    default:
        console.log("Just another day.");
}

//For Loop:
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


//While Loop:
let num = 10;
while (num >= 1) {
    console.log(num);
    num--;
}


//Do...While Loop:
let count = 1;
do {
    if (count % 2 === 0) {
        console.log(count);
    }
    count++;
} while (count <= 10);



