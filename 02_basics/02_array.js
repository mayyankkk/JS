const marvelHeroes = ["ironman", "thor", "spiderman"];
const dcHeroes = ["superman", "flash", "Batman"];

// marvelHeroes.push(dcHeroes)
// console.log(marvelHeroes);     //[ 'ironman', 'thor', 'spiderman', [ 'superman', 'flash', 'Batman' ] ] 
// Since we know in JS arrays can take any type of values so here dcHeroes has been treated as single object and pushed into the marvelHeroes  =>  syntax of appending two arrays is not preferred



let heroes = marvelHeroes.concat(dcHeroes);   // it returns an array by combining the both arrays without modifying any of them


console.log(heroes)        // [ 'ironman', 'thor', 'spiderman', 'superman', 'flash', 'Batman' ]


// Same thing can be done by "spread(...)" operator like this

let allNewHeroes = [...marvelHeroes, ...dcHeroes];
console.log(allNewHeroes);    //[ 'ironman', 'thor', 'spiderman', 'superman', 'flash', 'Batman' ]


let anoterArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

let real_another_array = anoterArray.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Mayank"));  // false
console.log(Array.from("Mayank"))  //[ 'M', 'a', 'y', 'a', 'n', 'k' ]-> converted into array
console.log(Array.from({ name: "Mayank" })); //[] (empty array)  batana hota kis chiz ka array banaye(whether keys or values)


let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));  //[ 100, 200, 300 ]
