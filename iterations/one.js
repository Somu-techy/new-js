// for

// for(let i = 0; i <= 10; i++){
//     const element = i;
//     console.log(element);
    
// }

for(let i = 0; i<=10; i++){
    for (let j = 0; j <= 10; j++) {
       
        console.log(i + '*' + j + '='+ i*j);
        
    }
    
}

let myArray =["flash", "batman", "superman"]
console.log(myArray.length);
for(let i = 0; i < myArray.length; i++ ){
    const element = myArray[i]
    console.log(element)
    
}


// break and continue

//break
for (let i=1 ; i<=20; i++)
{
    
    if (i == 5) {
        console.log(`Detected 5`);
        break
    }
    console.log(`Value of i is ${i}`);
    
}


//continue
for (let i=1 ; i<=20; i++)
{
    
    if (i == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is ${i}`);
    
}