// Challenge 1+2

// Mark
const markHeight = 1.69; // In meters
const markWeight = 78; // In kg
let markBmi;

// John
const johnHeight = 1.95;
const johnWeight = 92;
let johnBmi;

// BMI Formula
//Mark
markBmi = markWeight / markHeight ** 2;
johnBmi = johnWeight / johnHeight ** 2;

const markHigherBMI = markBmi > johnBmi;

if(markHigherBMI) {
    console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})!`)
} else {
    console.log(`John's BMI (${johnBmi}) is higher than Mark's (${markBmi})!`)
}


// Challenge 3

/* Data 1
const avgDolphines = (96 + 108 + 89) / 3;
const avgKoalas = (88 + 91 + 110) / 3;

if (avgDolphines > avgKoalas) {
    console.log("Dolphines win!");
} else if (avgDolphines < avgKoalas) {
    console.log("Koalas win!");
} else {
    console.log("It's a tie!");
}
*/

// Challenge 3: Bonus

const avgDolphines = (97 + 112 + 80) / 3;
const avgKoalas = (109 + 95 + 50) / 3;

if (avgDolphines > avgKoalas && avgDolphines >= 100) {
    console.log("Dolphines win!");
} else if (avgDolphines < avgKoalas && avgKoalas >= 100) {
    console.log("Koalas win!");
} else if (avgDolphines === avgKoalas && avgKoalas >= 100 && avgDolphines >= 100){
    console.log("It's a tie!");
} else {
    console.log("No one wins!");
}
