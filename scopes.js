var c = 300
let a = 300
if(true){
    let a = 10
    const b = 20
    var c = 30
    console.log("Inner: ", a);// inner block scope 'let'
    
}

// console.log(a);
// console.log(b);
// let and const has scope , so the value will not be printed outside it's scope

// console.log(c); // var has no scope, so the value gets printed

console.log("Outer: ",a); // outer scope 'let'

//###################################################

function one(){
    const username = "Somu"

    function two(){
        const website = "youtube"
        console.log(username);
    }
}




