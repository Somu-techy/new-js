// Immediately Invoked Function Expression (IIFE)

(function chai() {   // named IIFE
    console.log(`DB CONNECTED`);
})(); // semicolon ';' is important 



((name) => {   // Unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
    
})('Somu');