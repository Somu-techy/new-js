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
        console.log(website);
        
    }
    // console.log(website);// this is out of scope of function two 
   two()
}
one()


if(true){
    const username = "Somu"
    if (username === "Somu"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website); // out of scope
    
}
// console.log(username); // out of scope


// ################################################

console.log(addone(5))// this can be done

function addone(num) {
    return num + 1
    
}


addTWo()// this cannot be done 

const addTWo = function(num){
    return num + 2
}
