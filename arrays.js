// array

const myArr = [0, 1, 2, 3, 4, 5]; 
// const myHeros = ["shaktiman", "batman", "superman", "spiderman"];
// const myArr2 = new Array(1,2,3,4); 
// // different ways to declare an array

// console.log(myArr[3]); // 0
// console.log(myArr2); 

//array methods

myArr.push(6); // adds 6 to the end of the array
console.log(myArr); // [0, 1, 2, 3, 4, 5, 6]
myArr.pop(); // removes the last element from the array
console.log(myArr); // [0, 1, 2, 3, 4, 5]


myArr.unshift(9); // adds 9 to the beginning of the array
console.log(myArr); // [9, 0, 1, 2, 3, 4, 5]
myArr.shift(); // removes the first element from the array
console.log(myArr); // [0, 1, 2, 3, 4, 5]


console.log(myArr.includes(8)); // false
console.log(myArr.includes(3)); // true

console.log(myArr.indexOf(3)); // 3

const newArr = myArr.join("-"); // joins the array elements into a string with " - " as separator
console.log(newArr);
console.log(typeof newArr); // string


// slice and splice methods

console.log("A", myArr);

const myn1 = myArr.slice(1, 3); // returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)

console.log(myn1); // [1, 2]

console.log("B", myArr);


const myn2 = myArr.splice(1, 3); // changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
console.log(myn2); // [1, 2, 3]
console.log("C", myArr); // [0, 4, 5]