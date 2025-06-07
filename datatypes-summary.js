// Primitive
// 7 types : String , Number , Boolean, null, undefined, Symbol ,BigInt

const score= 100
const scoreValue= 100.3

const isLoggedin = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId)

let bigNumber = 84784583010231028347568946744656483n


// Reference (Non Primitive)

// Array , Objects, Functions

const heroes =[ "shaktiman", "naagraj", "doga"]

{
    name : "Somu"
    age : 21
}

let myObj = {
     name : "Somu",
    age : 21,
}

const myFunction = function(){
    console.log("Hello World");
    
}
console.log(typeof null);//=> object
console.log(typeof bigNumber);//=> number

//return type of variables in Javascript

// Number=>number
// String=>string
// Boolean=> boolean
// null=> object
// undefined=>undefined
// Symbol=> symbol
// BigInt=> bigint

// Arrays => object
// Function => function
// Object => object

// ################################

// Stack(primitive), heap(non-primitive)

let myYoutubename = "somuchannel"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "somu@google.com"

console.log(userOne.email);
console.log(userTwo.email);

