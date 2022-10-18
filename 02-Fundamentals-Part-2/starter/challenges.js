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


