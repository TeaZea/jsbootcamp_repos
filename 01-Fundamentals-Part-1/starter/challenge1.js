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

console.log(markBmi, johnBmi, markHigherBMI);