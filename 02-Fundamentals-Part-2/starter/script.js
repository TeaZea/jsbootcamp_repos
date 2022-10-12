// Strict Mode + S.M Lecture
"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I cant drive!');

// Example reserved words/variables by strict mode
const interface = "Audio";
const private = 534;
*/



// Functions Lecture
/*
function logger() {
    console.log("My name is Jonas");
}

// Calling,running, invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

// Functions Assignment

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and it's capital city is ${capitalCity}.`;
}

const canada = describeCountry('Canada', 42, 'Ottawa');
const usa = describeCountry('USA', 300, 'Washington DC');
const bulgaria = describeCountry('Bulgaria', 6, 'Sofia');
console.log(canada, usa, bulgaria);



// Declerations and Expressions

