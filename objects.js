// object literals
const mySym = Symbol("key1")

const JsUser = {
    // mySym : "mykey1", // this prints the symbol as string
    [mySym] : "mykey1",// to use the symbol in correct way
    "full name": "Soumyadipta Bera",
    name: "Somu",
    age: 21,
    loction: "kolkata",
    email: "somu@google.com",
    isLoggedIn: false,
    lastloginDays:["monday , tuesday" ],
}

// console.log(JsUser.email)   
// console.log(JsUser["email"]); // two ways to access objects data

// console.log(JsUser["full name"]);

// console.log(JsUser.mySym);
// console.log(typeof JsUser.mySym);// the symbol is actually string here

// console.log(JsUser[mySym]);
// console.log(JsUser);


// JsUser.email = "somu@chatgpt.com"
// // Object.freeze(JsUser) // freezes the object , values can't be modified
// JsUser.email = "somu@microsoft.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log(`Hello JS User`);
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
    
}

JsUser.greeting()
JsUser.greetingTwo()
