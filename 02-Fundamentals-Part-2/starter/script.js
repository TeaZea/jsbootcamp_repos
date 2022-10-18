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
/*
// Push (add to end)
const friends = ["Micheal", "Steven", "Peter"];
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

// Unshift (add to the begining of the array)
friends.unshift("John");
console.log(friends);

// Pop (remove)
friends.pop();
const popped = friends.pop()
console.log(popped);
console.log(friends);

// Shift (remove first element)
friends.shift();
console.log(friends);

// Return value of index
console.log(friends.indexOf("Steven"));

console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));

// Conditional experiment

if (friends.includes("Peter")) {
    console.log("You have a friend called Peter");
} else {
    console.log("You don't have a friend called Peter");
}
*/

// Methods Assignment

const neighbours = ["Romania", "Greece", "Turkey"];
neighbours.push("Utopia");
neighbours.pop();
console.log(neighbours);

if (neighbours.includes("Germany")) {
    console.log("You're probably in Europe!");
} else {
    console.log("You're probably NOT in Europe!");
}

neighbours[neighbours.indexOf("Turkey")] = "Turkei";

console.log(neighbours);



// Intro to Objects
/*
const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    age: 2037 - 1991,
    job: "Teacher",
    friends: ["Micheal", "Steven", "Peter"]
};
*/

// Objects Assignment

const myCountry = {
    country: "Canada",
    capital: "Ottawa",
    language: ["English", "French"],
    population: 42,
    neighbours: "USA"
};



// Dot & Bracket Notation
/*
const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    age: 2037 - 1991,
    job: "Teacher",
    friends: ["Micheal", "Steven", "Peter"]
};
console.log(jonas);

// Dot
console.log(jonas.lastName);

// Brackets
console.log(jonas['lastName']);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

//const interestedIn = prompt("What do you want to know about Jonas? Choose betweem firstName, lastName, age, job, and friends");

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Wrong request!');
// }

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtmann";
console.log(jonas);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}`);
*/

// Dot & Bracket Assignment

myCountry.population = 44;
console.log(myCountry);

myCountry["population"] = 42;
console.log(myCountry);



// Object Methods

