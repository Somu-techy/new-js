const name = "Somu"
const repoCount = 50

//console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Valo-rant")
console.log(gameName[1]);
//console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('l'));


const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-7,6)
console.log(anotherString);

const StringOne = "    Somu     "
console.log(StringOne);

console.log(StringOne.trim());


const url = "https://somu.com/somu%20bera"

console.log(url.replace('%20','@'));

console.log(url.includes('somu'));
console.log(url.includes('soumya'));


const StringTwo = "somu-is-me"

console.log(StringTwo.split('-'));
