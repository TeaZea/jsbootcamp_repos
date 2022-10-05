//Lecture 1

/*
let js = "amazing";
console.log(40 + 8 + 23 -10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonasd_matilda = "JM";
let $function = 27;

let person = "Jonas";
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

console.log(myFirstJob);
*/

// L1 Assignment

const country = "Canada";
const continent = "North America";
let population = 42; // In millions



// Lecture 2
/*
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

javaScriptIsFun = "Yes!";
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

// L2 Assignment

let isIsland = country;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);



// Lecture 3
/*
let age = 30;
age = 31;

const birthYear = 1991;

var job = "programmer";
job = "teacher";
*/

// L3 Assignment

const language = "English";


// Lecture 4
//Math Operators
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = "Jonas";
const lastName = "Schmedt";
console.log(firstName + " " + lastName);

// Assignment Opeorators
let x  = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4;
x++;
x--;
x--; // = 99
console.log(x);

//Comparison Operators

console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018); // Math Operators first, then Comparison.
*/

// L4 Assignment

let pop = population / 2;
pop++;
console.log(pop);

const description = "Canada is in North America. The two official languages are French and English";



//Lecture 5 - Operator Prededence
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x,y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/



///Lecture 6 - Strings and Template Literals
/*
const firstName = "Jonas";
const job = "Teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ", a" + (year - birthYear) + "years old" + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log("String with \n\
mupltiple \n\
lines");

console.log(`More
on
new
lines`);
*/

//L6 Assignment
const descriptionEdit = `${country} is in North America and has a population of ${population} million`
console.log(descriptionEdit)



// if/else Statements
/*
const age = 15;

if(age >= 18) {
    console.log('Sarah can start driving license');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft}`);
}

const birthYear = 1991;
let century;

if(birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

// if/else Assignment
if(population > 33) {
    console.log(`${country} is above the average`)
} else {
    const popDiff = 33 - population;
    console.log(`${country} is ${popDiff} million below the average`)
}



// Type Conversion and Coercion
/*
// Type Conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));

console.log(String(23), 23);

// Type Coercion

console.log("I am " + 23 + " years old"); // '+' converts numbers to strings
console.log("23" - "10" - 3); // '-' converts strings to numbers

console.log("23" * "2"); // '*' and  '/' converts everything to numbers only
*/



// Truthy and Falsy

//5 falsy values: 0, '', undefined, null, NaN. WILL become false hen converted to a Boolean
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if(money) {
    console.log("Don't spend it all ;)");
} else {
    console.log("You should get a job!");
}

let height;
if(height) {
    console.log("YAY! height is defined!");
} else {
    console.log("Height is UNDEFINED!");
}
*/

