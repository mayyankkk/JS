//Arrays

let myArray = [0, 1, 2, 3, 4, 5];

// myArray.push(6);
// myArray.push(7);   stack operations
// myArray.pop();

// console.log(myArray);

myArray.unshift(9);  //Adding new 9 to the start
myArray.shift();     //removing number from the start

console.log(myArray);

console.log(myArray.includes(9)); //returns true or false accordingly if the myArray contains 9

console.log(
    myArray.indexOf(5)
);   //returns index of the number 5 in the array

const newArray = myArray.join();  //it adds all the elements of the array into string
console.log(typeof newArray);  //string


// slice and splice

console.log("A", myArray);  // A [ 0, 1, 2, 3, 4, 5 ]
const myn1 = myArray.slice(1, 3);  
console.log(myn1);     // [ 1,2 ]     it doesn't includes last range
console.log("B", myArray);

const myn2 = myArray.splice(1, 3);   //[ 1, 2, 3 ]   -> includes last range but also manipulates original array
console.log(myn2);
console.log("C", myArray);    //C [ 0, 4, 5 ]


