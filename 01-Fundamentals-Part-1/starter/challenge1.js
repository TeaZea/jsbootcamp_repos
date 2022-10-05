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