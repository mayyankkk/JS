// const score = 1000
// console.log(score);

// const balance = new Number(100);  // Number Object
// console.log(balance);

// console.log(typeof balance);
// console.log(balance.toString().length);

// console.log(balance.toFixed(2))   // Mostly used when the precision value is very high

// const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3));  //prints 124 before the decimal digits get more priority over the after decimal digits

// const anotherNumber = 1123.899
// console.log(anotherNumber.toPrecision(3)) //1.12e+3-> precision 3 but in exponential value
// // So basically this method does round off

// const num = 100000000
// console.log(num.toLocaleString())   //100,000,000 -> US standards

// console.log(num.toLocaleString('en-IN')); //10,00,00,000 -> Indian standar



// // -------------------------------------------------- Maths ------------------------------------------------------------------------
// // We can watch all the properties and the methods in Math object in console or MDN

// console.log(Math.abs(-4))           //absolute value
// console.log(Math.round(4.9));       // round off
// console.log(Math.ceil(4.3));        //ceil value
// console.log(Math.floor(4.3));       //floor value

console.log(Math.random());   // it'll return random values between 0 and 1
console.log(Math.floor(Math.random() * 10 + 1));


//Let's say if we want to print some random values between given range
let min = 10;
let max = 20;
console.log(Math.floor(Math.random() * (max - min + 1) + min));
