// Javascript Execution Context

// 1. Global Execution Context
// {} -> Global EC 
// global context ko this mai rkh diya jata hai
// Global EC of browser is different when compared to engines like Node

// 2. Function Execution Context
// 3. Eval Execution Context 

// {} 
// 1. Memory Creation Phase (Creation Phase)
// 2. Execution Phase 

Code 
let val1 = 10 
let val2 = 5
function addNum(num1, num2){
    let total = num1 + num2 
    return total 
}
let result1 = addNum(10, 2)

Steps
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
    val1 -> undefined
    val2 -> undefined 
    total -> undefined 
    Execution Phase 
    num1 -> val1 -> 10 
    num2 -> val2 -> 5 
    total -> num1 + num2 -> 15 
    After this the execution context gets deleted
