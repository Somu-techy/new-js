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

console.log(loginUserMessage("Somu"))

// console.log(loginUserMessage()) //undefined
