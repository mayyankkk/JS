// functions
// function sayMyName() {
//     console.log('Mayank');
//     console.log('Mayank');
//     console.log('Mayank');
//     console.log('Mayank');
//     console.log('Mayank');

// }

// sayMyName // this is the reference of the function defined above
// sayMyName() // and this is execution of the very same function


function addTwoNumbers(number1, number2) {
    return number1 + number2;
}

const result = addTwoNumbers(3, 4);
console.log("Result:", result);


function loginUserMessage(userName="Mayank") {
    return `${userName} just logged in!`;        //to avoid undefined value we can use if-else or we can define sum default values
}

console.log(loginUserMessage("mayank"))    //mayank just logged in!
console.log(loginUserMessage());     //undefined just logged in!


// when we have multiple argumenst at calling time then  we can use rest(...) operaotor
// function calculateCartPrice(...num1) {       
//     return num1; 
// }

// console.log(calculateCartPrice(200,400,500));     //[ 200, 400, 500 ] array of arguments


function calculateCartPrice(val1,val2,...num1) {       
    return num1; 
}

console.log(calculateCartPrice(200, 400, 500, 400, 2000));     //[ 500, 400, 2000 ] starting two values considered for val1 and val2 and array of rest of the values is returned

const user = {
    userName: "Mayank",
    price: "1999"
}

function handleObject(anyObject) {
    console.log(`username is ${anyObject.userName} and price is ${anyObject.price}`);
}


handleObject(user)
handleObject({
    userName: "Shivam",
    price:"123"
})

function returnSecondValue(anyArray) {
    
    return anyArray[1];
}

console.log(returnSecondValue([100,200,300]));