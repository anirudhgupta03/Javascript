//Immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log(`DB CONNNECTED`)
})();
//semicolon is necessary as the function is invoked
//although but it does not know where to stop the context

// ()()
// (FunctionDefinition)(Execution)
// To avoid global scope pollution we use 
// iife


((name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})('hitesh');