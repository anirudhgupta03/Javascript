// Javascript Execution Context

// 1.JS creates Global excution context 
// 2.Next it creates memory phase
// 3.Memory phase - In this phase,the variables are set to undefined 
//   until the execution phase(next phase) and the functions are set to their definitions.
// 4.Next it creates the execution phase
// 5.Execution phase - In this phase,the variables are initialsed to given values and 
//   when the functions are called,it creates a memory phase and execution phase for the function 
//   just like the main one.

// For live demo:
// browser > inspect > Sources
// create a snippet with few functions and visually experience the call stack.

// 1. Global Execution Context
// {} -> Global EC 
// global context ko this mai rkh diya jata hai
// Global EC of browser(Window Object) is different when compared to engines like Node

// 2. Function Execution Context
// 3. Eval Execution Context  (Mongoose Language)

// {} 
// 1. Memory Creation Phase (Creation Phase)
// 2. Execution Phase 

/* Code

let val1 = 10 
let val2 = 5
function addNum(num1, num2){
    let total = num1 + num2 
    return total 
}
let result1 = addNum(10, 2)

*/

/* Steps

1. Global Execution
2. Memory Phase 
    val1 -> undefined
    val2 -> undefined 
    addNum -> definition 
    result1 -> undefined 
    result2 -> undefined 
3. Execution Phase 
    val1 <- 10
    val2 <- 5 
    addNum -> New Execution context(new variable environment + execution thread)
    
    Memory Phase 
    num1 -> undefined
    num2 -> undefined 
    total -> undefined 

    Execution Phase 
    num1 -> val1 -> 10 
    num2 -> val2 -> 5 
    total -> num1 + num2 -> 15 
    After this the execution context gets deleted

*/