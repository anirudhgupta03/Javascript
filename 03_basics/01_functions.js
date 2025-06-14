function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("I");
    console.log("R");
    console.log("U");
    console.log("D");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){           //parameters
//     console.log(number1 + number2);
// }

// const result = addTwoNumbers(1, 2)     //arguments
// console.log(result)                     //undefined

// function addTwoNumbers(number1, number2){           //parameters
//     return (number1 + number2);
// }

// const result = addTwoNumbers(1, 2)     //arguments
// console.log("Result: ", result)                     //3

function loginUserMessage(username = "sam"){
    if(username === undefined){             //if(!username)
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("hitesh")) //hitesh just logged in
// console.log(loginUserMessage())         //undefined just logged in
console.log(loginUserMessage())         //sam just logged in


