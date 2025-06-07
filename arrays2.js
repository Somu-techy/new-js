const marvel_heroes = ["thor", "ironman", "spiderman"];
const dc_heroes = ["batman", "superman", "flash"];

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes); // ["thor", "ironman", "spiderman", ["batman", "superman", "flash"]]

const allheroes = marvel_heroes.concat(dc_heroes);// using concat method

console.log(allheroes); // ["thor", "ironman", "spiderman", "batman", "superman", "flash"]


const allheroes2 = [...marvel_heroes, ...dc_heroes];// using spread operator

console.log(allheroes2); // ["thor", "ironman", "spiderman", "batman", "superman", "flash"]

const another_array = [1,2,3, [4, 5, 6], [6, 7, [4,5]]]// nested array
const real_another_array = another_array.flat(Infinity); // flattening the array to a depth of Infinity

console.log(real_another_array); // [1, 2, 3, 4, 5, 6, 6, 7, 4, 5]



console.log(Array.isArray("somu")) // false

console.log(Array.from("somu")) // [ 's', 'o', 'm', 'u' ] - converts a string to an array;

console.log(Array.from({name: "somu"}));// empty array , interesting 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));// [ 100, 200, 300 ] - creates an array from the arguments passed

