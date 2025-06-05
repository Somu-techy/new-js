const score = 400

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-In'));
console.log(hundreds.toLocaleString());

//##################### Maths ########################
 console.log(Math);
 console.log(Math.abs(-4));// only -ve value change to +ve
console.log(Math.abs(4));

console.log(Math.round(4.1));
console.log(Math.ceil(4.2));
console.log(Math.floor(6.8));

console.log(Math.min(4 , 8, 2, 7));
console.log(Math.max(7, 8, 3, 5));

console.log(Math.random()); // random value always stays b/w 0 and 1

console.log((Math.random()*10) +1) ;
console.log(Math.floor(Math.random()*10) +1);

const min = 10;
const max = 20;

console.log(Math.random() * (max - min + 1) + min); // random value b/w 10 and 20
