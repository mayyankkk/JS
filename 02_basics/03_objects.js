// There are two methods of creating objects
// 1. singleton(object.create())
// 2. literals


// ###################################################  Literals  ##################################################################

let mySym = Symbol("key1");

const jsUser = {
    name: "Mayank",
    "full name": "Mayank Pradhan",
    age: 18,
    [mySym]: "myKey1",
    location: "Patna",
    email: "nerdmyk@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ['Monday','Saturday']
}

// Accessing objects

console.log(jsUser.email);   //method 1
console.log(jsUser["email"]);  //method 2  (more preferred)
console.log(jsUser["full name"])  //only method to access full name

jsUser.email = "mayank@microsoft.com" //modifying objects
// Object.freeze(jsUser);  // now we can't modify values in jsUser  
jsUser.email = "mayank@gmail.com"
console.log(jsUser);

jsUser.greetings = function () {
    console.log(`Hello user`);
}

console.log(jsUser.greetings);  // here functions didn't execute it's reference is provided
console.log(jsUser.greetings()); // executed + reference is provided
jsUser.greetingsTwo = function () {
    console.log(`Hello user, ${this["full name"]}`);
}
  
console.log(jsUser.greetingsTwo());   // executed + reference is provided