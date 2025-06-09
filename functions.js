function saymyname(){
    console.log("S");
    console.log("o");
    console.log("m");
    console.log("u");
}

// saymyname()

// function addTwoNum(number1, number2)// parameters
// {

//     console.log(number1 + number2)
// }

// addTwoNum(9, 3)// arguments


function addTwoNum(number1, number2)
{

    return number1 + number2
}

const result = addTwoNum(9, 3)

// console.log("Results:", result);

function loginUserMessage(username){
    if(!username){ // '!' gives the opposite value , when undefined value gets true this block get activated
        console.log("Please enter your username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Somu"))

// console.log(loginUserMessage()) //undefined

// ##################################################

function calculateCartPrice(val1, val2, ...num1){ // using rest operator '...'
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 600, 900))

const user = {
    username : "Somu",
    price : 199

}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleobject(user) // passing the object name user as arguments

handleobject({
    username: "Sam",
    price: 399
}) // we can directly create object and pass arguments

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getarray){
    return getarray[1]
}

console.log(returnSecondValue(myNewArray));
