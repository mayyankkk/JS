/********************************  Conversions  *******************************/

let score= "33"

console.log(typeof score);      //string
console.log(typeof (score));    //string

let valueInNumber= Number(score)

console.log(valueInNumber)
console.log(typeof valueInNumber) //=> number

let age="33abc"
let num=Number(age)
 
console.log(num)

console.log(typeof num)    // It'll print number but if we print it's value then it'll return NaN(Not a Number) and this is the problem in js
//NaN => a type in JS


let x=null 
let xNum=Number(x)
console.log(xNum)     //This is converted as zero (It's also a problem)

let y=undefined
let yNum=Number(y) 
console.log(typeof yNum)   //number
console.log(y)    //undefined


// "33"=> 33
// "33abce"=> NaN
//  true=> 1 / false=> 0

let isLoggedIn=1     //0=> false, ""(empty string) => false  //1=> true, //"Mayank"=> true

let booleanIsLoggedIn= Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)




/************************************************** Operations *************************************************/
let value=3
let negValue=-value // -3

// console.log(2+3)
// console.log(2-2)
// console.log(2*3)
// console.log(2**3) //=> 2^3
// console.log(2%3);
// console.log(2/3);

let str1="Hello" 
let str2=" Mayank"

// console.log(str1+str2) // "Hello Mayank"

//console.log(1+2) //3
// console.log(1+"2")  => 12 string
// console.log("1"+2)  => 12 string
// console.log("1"+2+2) => 122 string
// console.log(1+2+"2") => 32 (first value kya h uspe depend krta hai output)


// console.log(+true) =>1
// console.log(+"") => 0


// postfix prefix as usual
