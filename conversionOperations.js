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