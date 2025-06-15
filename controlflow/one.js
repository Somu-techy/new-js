// if
const isUserLoggedIn = true
const temperature = 41
if( temperature < 50){
    console.log("less than 50");
}
else{
    console.log("temperature is greater than 50");
    
}
    
// <, >, <=, >=, ==, !=, ===, !== 

const score = 200

if(score > 100){
    const power = "fly"
    console.log(`User power: ${power}`);
    
}
// console.log(`User power: ${power}`);// this statement is not in scope


const balance = 1000

if (balance < 500){
    console.log("less than");
    
}else if (balance < 750){
    console.log("less than 750");
    
}else if (balance < 900){
    console.log("less than 750");
    
}else{
    console.log("less than 1200");
    
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInEmail = false
if (userLoggedIn && debitCard && 2==3)
{
    console.log("Allow to buy course");
    
}
    
if(loggedInFromGoogle || loggedInEmail){
    console.log("User logged in");
    
}

