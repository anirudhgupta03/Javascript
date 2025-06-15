// var c = 300     //Global Scope

if (true) {     //Block Scope
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a);  a is not defined
// console.log(b);  b is not defined
// console.log(c);  30  (ideally it should also come undefined) s

// 📁 Scope determines where variables are accessible and how long they exist in a program.
// 🔄 Variables declared inside different scopes can have the same name without conflict.
// 🚧 Understanding scope helps avoid issues like variable shadowing and improves code clarity.
// 🎯 The "let" keyword in JavaScript helps control variable scope, preventing unintended consequences in code.
// 🌐 Global scope in JavaScript is where a variable is available throughout the entire program.
// 🔄 Local scope refers to the limited range where a variable is accessible, such as within a function.
// 🐍 Issues can arise when variables are declared multiple times with the same name in different scopes.
// 🚧 Undefined variable errors can occur if a variable is used before being defined in the code.
// 🌐 Global variables can lead to unintended conflicts and errors when different parts of the program use the same variable names.
// 🌐 Global and local scopes in JavaScript are explained in Hindi, highlighting the impact on variable values.
// 🔄 Variables declared inside a function have local scope, affecting only that function, while global scope variables persist.
// 🧩 Nested functions create a block scope, and understanding scope is crucial to avoid programming bugs.
// 🔍 Careful naming of variables is essential to prevent unintended global scope pollution.


// Nested Scope
function one(){
    const username = "anirudh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website)
    two()
}

one()

// function
// console.log(addone(5))  //6
function addone(num){
    return num + 1
}

//expression
// addTwo(5)       //Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5))