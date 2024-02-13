// console.log("2">1) =>true
// console.log("01"<2); =>true

// console.log(null>0); => false
// console.log(null==0); =>false
// console.log(null>=0);  => true

// The reason why the equality check(==) and the comparison operators >,<,>=,<= works differently is , comparison operatos converts null to a number treating as 0.
// That's why null>=0 is true and null == false



// console.log(undefined>0); // false
// console.log(undefined==0);  // Equality check ka implementation normal comparision operator se alag hota hai
// console.log(undefined>=0);  //false

//=== (triple equal) strick check 


// it doesn't only check the value but also checks the data type of the operands
// console.log("2"===2)  //=>false

// try to compare between similar datatypes

