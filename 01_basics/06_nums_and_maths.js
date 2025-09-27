const score = 100;
//console.log(score);

const balance = new Number(500);
//console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));
// console.log(balance.toPrecision(3));

const cost = 100000;
//console.log(cost.toLocaleString("en-IN"));//used to seperate by commas

//## math ##
/*
console.log(Math); //Object [Math] {}
console.log(Math.abs(-4));
console.log(Math.round(3.4));
console.log(Math.ceil(3.4));
console.log(Math.floor(3.4));
console.log(Math.min(3, 5, 3, 2));
*/

console.log(Math.random()); //random always generate no bet 0 and 1
console.log(Math.random() * 10 + 1); // This assures that values are atleast 1 & more than 1
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); //used to generate the random no, but in a particular range
