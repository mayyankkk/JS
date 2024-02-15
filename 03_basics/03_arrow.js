// const user={
//     userName:"Mayank",
//     price: "1999",
//     welcomeMessage: function() {
//         console.log(`Welcome,${this.userName}`);  //this is used to refer to current context
//     }
// }


// user.welcomeMessage();   //Welcome Mayank

// user.userName = "Shivam";
// user.welcomeMessage();   //Welcome Shivam


// console.log(this)  //{}  this refers to global context in node.js

// function chai() {
//     console.log(this)  // here multiple values are printed, it refers to global context in node.js
// }

// chai();
// function chai1() {
//     userName = "Mayank";
//     console.log(this.userName) //undefined is printed because this only works with objects
// }

// const chai = function () {
//     userName="Mayank";
//     console.log(this.userName)  //undefined  this refers to global context in node.js
// }



// ++++++++++++++++++++++++++++++++++++++++++++++++++++Arrow fn+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const chai = () => {                     //Method 1
//     userName = "Mayank";
//     console.log(this)  //{}                                      
// }
// chai()

// const addTwo = (num1, num2) => {     //Method 2
//     return num1 + num2;
// }

const addTwo = (num1, num2) => (num1 + num2)  //Method 3(implicit return)

console.log(addTwo(5, 6));  //11


const user = () => ({ userName: "Mayank", price: "1999" })  //Method 4(implicit return for object) curly braces aren't used for this because curly braces is considered as function body

console.log(user())   //{ userName: 'Mayank', price: '1999' }