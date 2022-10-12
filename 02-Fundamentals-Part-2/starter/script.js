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

// Function decleration - can declare before the function if need
/*
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);

console.log(age1);

// Function expression
// Expressions produce values
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);
*/

// Decleration & Expression Assignment

// Decleration
function percentageOfWorld1(population) {
    return population / 7900 * 100;
}

const percent1 = percentageOfWorld1(42);
const percent2 = percentageOfWorld1(300);
const percent3 = percentageOfWorld1(6);
console.log(percent1, percent2, percent3);

// Expression

const percentageOfWorld2 = function (population) {
    return population / 7900 * 100;
}
const perc1= percentageOfWorld2(42);
const perc2= percentageOfWorld2(300);
const perc3= percentageOfWorld2(6);
console.log(perc1, perc2, perc3);



// Arrow Function

