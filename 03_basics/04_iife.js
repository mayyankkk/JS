// Imediately invoked function expression(IIFE)
/* IIFE is a function expression that is executed immediately after it is created.
Sometimes what happens is we don't want our function to be polluted by global values, so we use IIFE.
ex: fetching data from Database.
*/

(function chai() {    //NAMED IIIFE
    console.log("Hello");   //Hello is printed and this is how we define iife and it is executed immediately
})();   //Semicolon is must after defining IIFE because it doesn't know when to stop (if we have multiple IIFE's then there will be a problem and our program will give error)




((name) => {    //Unnamed IIFE
    console.log(`Hello, ${name}`);     //arrow function is also used as iife
})("Mayank");    //variable is provided together 