


if (true) {
    let a = 10;
    const b = 20;
    var c = 30;

}



// console.log(a); //not printed because a is defined in block scope
// console.log(b); //not printed because b is defined in block scope
console.log(c); // printed because c is defined in block scope and var has global scope (it's a bad practice to use var, use let instead)


let x = 10;
if (true) {
    let x = 40;
    console.log("inner x", x); //40       this is block scope
}

console.log("outer x", x); //10             this is global scope


function one() {
    const userName = "Mayank";
    function two() {
        let website = "Coding Blocks";
        console.log(userName);   //printed because userName is defined in parent scope
    }
    // console.log(website); //not printed because website is defined in block scope of function two(Error)
    two();
}

one();



console.log(addOne(5));   //it runs  (this is hoisting)

function addOne(num) {
    return num + 1;
}

console.log(addTwo(5));   //it doesn't run, gives error Cannot access 'addTwo' before initialization 

const addTwo= function(num) {
    return num + 2;
}