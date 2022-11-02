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

// Objects Assignment + Object Method Assignment

const myCountry = {
    country: "Canada",
    capital: "Ottawa",
    language: ["English", "French"],
    population: 42,
    neighbours: ["USA"],

    describe: function () {
        return `${this.country} has a population of ${this.population} million people, ${this.neighbours.length} neighboring countries and a capital city called: ${this.capital}.`
    },

    checkIsland: function () {
        if (myCountry.neighbours === 0) {
            myCountry.checkIsland = True;
        }
    }
};

console.log(myCountry.describe());
console.log(myCountry);


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

console.log(`${myCountry.country} has a population of ${myCountry.population} million people, ${myCountry.neighbours.length} neighboring countries and a capital city called: ${myCountry.capital}.`)

myCountry.population = 44;
console.log(myCountry);

myCountry["population"] = 42;
console.log(myCountry);



// Object Methods
/*
const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    birthYear: 1991,
    job: "Teacher",
    friends: ["Micheal", "Steven", "Peter"],
    hasDriversLicense: true,

    // calcAge: function(birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function() {
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    // Ternerary function inside the return string
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} years old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};

// console.log(jonas.calcAge(jonas.birthYear));
// console.log(jonas['calcAge'](1991));

// Need to calculate the age once
console.log(jonas.calcAge());
// Then retrieve the answer afterwards
console.log(jonas.age);
console.log(jonas.getSummary());
*/

// Object Methods Assignment - done in previous space



// For Loop
/*
// console.log("Lifting weights repitition 1");
// console.log("Lifting weights repitition 2");
// console.log("Lifting weights repitition 3");
// console.log("Lifting weights repitition 4");
// console.log("Lifting weights repitition 5");
// console.log("Lifting weights repitition 6");

// For loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repitition ${rep}`);
}
*/

// For Loop Assignment

for (let vote = 1; vote <= 50; vote++) {
    console.log(`Voter number ${vote} is voting`);
}



// Looping Arrays, Breaking Conditions
/*
const jonas = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "Teacher",
    ["Micheal", "Steven", "Peter"],
    true
];

const types = [];

//Arrays are always 0-based
for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i]);

    // Filling array
    //types[i] = typeof jonas[i];

    types.push(typeof jonas[i]);
}

console.log(types);S
for (let i = 0; i <= years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

console.log("----ONLY STRINGS----");

// Continue (continues through the loop)
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== "string") continue;
    console.log(jonas[i], typeof jonas[i]);
}S

// Break (stops the loop)

console.log("----BREAK WITH NUMBER----");

// Continue (continues through the loop)
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === "number") break;
    console.log(jonas[i], typeof jonas[i]);
}
*/

// Looping Arrays, Break & Continue Assignment

const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
    const perc = percentageOfWorld1(populations[i]);
    percentages2.push(perc);
}

console.log(percentages2);


// Looping Backwards & Loops in Loops
/*
const jonas = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "Teacher",
    ["Micheal", "Steven", "Peter"],
];

for (let i = jonas.length - 1; i >=0; i--) {
    console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------ starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weights repetition ${rep}!`);
    }
}
*/

// Looping Assignment

const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweeden", "Russia"]
];

// for (let i = listOfNeighbours.length; i <= listOfNeighbours.length; i++) {
//     let newstr = listOfNeighbours.split('');

//     for (let i = newstr.length; i <=newstr.length; i++) {
//         console.log(newstr[i]);
//     }
// }

for (let i = 0; i < listOfNeighbours.length; i++) {

    for (let y = 0; y < listOfNeighbours[i].length; y++) {
        console.log(`${listOfNeighbours[i][y]}`);
    }
}



// While Loop
/*
let rep = 1;
while (rep <= 10 ){
    console.log(`Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}
*/
