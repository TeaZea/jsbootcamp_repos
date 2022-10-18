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
/*
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1991, 'Bob'));
*/

// Arrow Function Assignment

const percentageOfWorld3 = population => population / 7900 * 100;
const perc4 = percentageOfWorld3(42);
console.log(perc4);



// Functions Calling Other Functions
/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}


function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2,3));
*/

//Functions Calling Functions Assignment

function describePopulation(country, population) {
    const pop = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${pop}% of the world.`;
}

console.log(describePopulation('Canada', 42));



// Reviewing Functions
/*
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}


const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
    //return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1991,'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/

 

// Intro to Arrays
/*
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Micheal", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991,1984,2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/

// Array Assignment

const populations = [300, 42, 150, 6];

if (populations.length === 4) {
    console.log("True");
} else {
    console.log("False");
}

const percentages = [percentageOfWorld1(42), percentageOfWorld1(300), percentageOfWorld1(150), percentageOfWorld1(6)]
console.log(percentages);



// Methods

