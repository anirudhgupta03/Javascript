//Immediately Invoked Function Expressions (IIFE)
//https://developer.mozilla.org/en-US/docs/Glossary/IIFE

(function chai(){
    //named iife
    console.log(`DB CONNNECTED`)
})();
//semicolon is necessary as the function is invoked
//although but it does not know where to stop the context

// ()()
// (FunctionDefinition)(Execution)
// To avoid global scope pollution we use 
// iife


((name) => {
    //unnamed iife
    console.log(`DB CONNECTED TWO ${name}`)
})('hitesh');