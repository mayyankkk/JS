// _______________________________________ String Concatenation __________________________________________ //
const name = "Mayank"
const repoCount = 50
console.log(name+repoCount+" value");
// This concatenation method is not preferred

//backticks are preferred as it has string interpolation that means by making placeholders (using $ sign) we can directly inject our variables into the string
console.log(`Hello, My name is ${name} and my repo count is ${repoCount}`); //Modern syntax

let gameName = new String("      Mayank Prakash     ")
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(0))
// console.log(gameName.indexOf('M'))

// let newString = gameName.substring(1, 4);//end index is not included
// console.log(newString);

let anotherGameName = gameName.slice(-1, 15)     //It is similar to substring but it can take negative values in order to extract substrings from the end
console.log(anotherGameName)


let trimmedName = gameName.trim()   //removes startng and ending spaces inside the strings mostly used in taking input from forms
console.log(trimmedName)

let url = "https://mayankpradhan.com/Mayank%20Pradhan";
console.log(url.replace("%20", "->"))  // replaces "%20" with "->"

console.log(url.includes("mayank"));  // returns true or false accordingly -> if given string("mayank") is present in the url  or not



