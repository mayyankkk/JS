const accountId=1444553
let accountEmail='nerdmyk@gmail.com'
var accountPassword="12345"

// prefer not to use var because of its block scope and funcctional scope problem

accountCity="Jaipur"
let accountState;  // this will give undefined as it is not defined

// accountId=144  //const value cannot be reassigned

accountEmail="nerdmyk"
console.log(accountId)
accountCity="Bengaluru"

// to print values in the form of table
console.table([accountEmail,accountId,accountPassword,accountCity,accountState]);  // should be passed as an array