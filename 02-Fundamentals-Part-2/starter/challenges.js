//Challenge 1

const calcAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
// console.log(`Average score of Dolphins is: ${scoreDolphins} and average score Koalas is: ${scoreKoalas}.`);

const checkWinner = function(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (average score of Dolphins is: ${scoreDolphins} and average score Koalas is: ${scoreKoalas}.)!`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (average score of Dolphins is: ${scoreDolphins} and average score Koalas is: ${scoreKoalas}.)!`);
    } else {
        console.log("No one wins...")
    }
}

checkWinner(scoreDolphins, scoreKoalas);



// Challenge 2

const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? 15 / 100 * bill : 20 / 100 * bill;
}

console.log(calcTip(100));

const bills = [125, 55, 44];
console.log(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));

const total = [bills[0] + calcTip(bills[0]), bills[1] + calcTip(bills[1]), bills[2] + calcTip(bills[2])];
console.log(total);



// Challenge 3

// BMI Formula
// weight / height ** 2;

const mark = {
    fullName: "Mark Miller",
    mass: 78, // In kg
    height: 1.69, // In meters

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

// NEED TO CALL FUNCTION!
mark.calcBMI();
john.calcBMI();

if(mark.bmi > john.bmi) {
    console.log(`${mark.fullName} (${mark.bmi}) is higher than John's (${john.bmi})!`);
} else {
    console.log(`${john.fullName} (${john.bmi}) is higher than Mark's (${mark.bmi})!`);
}


// Challenge 4

const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

for (let i = 0; i < bill.length; i++) {
    calc = calcTip(bill[i]);
    tips.push(calc);
    totals.push(tips[i] + bill[i]);
}

console.log("-----tips below----");
console.log(tips);
console.log("-----totals below----");
console.log(totals);

//BONUS CHALLENGE


