// The categorisation of the data types hase been done based on how it is stored inside the memory and how it is accessed.
// and based on this criteria they have divided datatypes into two categories 

// Dynamically typed language

// 1. Primitive and 
// 2. Non Primitive



// ->Primitive(7 categories)  => Call by value datatypes => inki copy refereence hoti hai

//  String, Number, Boolean, null(empty), undefined, Symbol(Kisi bhi value ko unique banane k liye use hota hai), BigInt

// const score =100
// const scoreValue = 100.3
// // above both are considere in number

// const isLoggedIn = false
// const outsideTemmp = null
// let userEmail; //undefined

// // const id = Symbol('123')
// // const anotherId = Symbol('123')
// // console.log(id===anotherId); // false

// // Here above both are different even though the string passed in symbol for both the identifiers are same

// // ->Non Primitive(reference type) => call by reference => inki memory reference di jati hai.

// // Array, Objects, Functions

// // Array
// const heroes = ["Shaktiman", "naagraaj", "doga"] //reference type

// // Objects

// let myObj={
//     name: "Mayank",
//     age:"22"
// }
// console.log(heroes);
// console.log(myObj);


// // functions
// const myFunction = function () {
//     console.log("Hello World!");
// }
// console.log(typeof heroes);

// // console.log(typeof myFunction)  => function object




// -------------------------------------------------------------------------------------------------------------------------------

//  *********************************************** Stack and Heap **************************************************************

// Stack used in Primitive data types -> copy of the variables provided

// Heap used in Non-primitive data types-> reference of the original values provided 

let myYoutubeName = "Mayank"  //=> it goes to stack
let anotherName = myYoutubeName
console.log(anotherName);
anotherName = "Pradhan"
console.log(anotherName);
console.log(myYoutubeName);  //-> these primitive datatypes use stact to store data and they share data by making copy of the same


let userOne={
    name:"Mayank",
    email:"nerdmyk@gmail.com"
}
console.log(userOne)
let userTwo = userOne
userTwo.email="prakashmayank69@gmail.com"
console.log(userOne)



