const user = {
    username: "Somu",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);  // there no global object here, so it gives empty object


// function chai(){
//     let username = "Somu"
//     console.log(this.username);// undefined
    
// }
// chai() 




// const chai = function (){
//     let username = " Somu"
//     console.log(this.username); // undefined
    
// }
// chai()



// const chai = () => {
//     let username = "Somu"
//     console.log(this.username);// undefined
    
// }
// chai()

// 'this' doesn't work in functions 


// Arrow functions

// different ways to declare an "Arrow Function"

// First Way
const addOne = (num1, num2) => {
    return num1 + num2
}

console.log(addOne(3, 4));

// Second Way
const addTwo = (num1, num2) => num1 + num2
console.log(addTwo(3, 4));

// Third Way
const addThree = (num1, num2) => (num1 + num2)
console.log(addThree(3,4));

// this way is use to return object in arrow function
const theuser = () => ({username: "Somu"})
console.log(theuser()); 
