let score ="33"
let score1 = "33abc"
console.log(typeof score)
console.log(typeof (score))

let valueInNumber= Number(score)
let valueInNumber1= Number(score1)
console.log(typeof valueInNumber)
console.log(typeof valueInNumber1)
console.log( valueInNumber1);

let score2= null
let valueInNumber2=Number(score2)
console.log(valueInNumber2)

let score3=undefined
let valueInNumber3= Number(score3)
console.log(valueInNumber3);


// "33" => 33
// "33abc"=> NaN
// true => 1; false => 0

let isLoggedIn ="Somu"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true ; 0 => false
// "" => false
// "Somu" => true

let someNum = 33

let StringNumber = String(someNum)
console.log( typeof StringNumber)

// ########################################### Operations ########################################################################

 let value = 3
 let negVal= -value
 console.log(negVal);
 
//  console.log(2+2);
//  console.log(2-2);
//  console.log(2*2);
//  console.log(2**2);
//  console.log(2/2);
//  console.log(2%2);

let str1 = "hello"
let str2 = " Somu"

let str3 = str1+str2
console.log(str3);

console.log("1"+ 2)
console.log(1 + "2")
console.log("1"+ 2 + 2) // rule or guidelines
console.log(1 + 2 + "2"); // rule or guidelines 

console.log(+true);
console.log(+"");

let num1, num2, num3 
num1= num2 = num3 = 2+2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);





