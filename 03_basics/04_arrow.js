const user = {
    username: "anirudh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this)
    }
}

user.welcomeMessage()       //anirudh , welcome to website
user.username = "hitesh"
user.welcomeMessage()       //hitesh , welcome to website

console.log(this)       //node environment {} 

// Previously the engine used to run js was present only
// in browser, but in current time, we have various engines to run js
// like node, deno etc.

//context cannot be accessed using 'this' keyword in arrow functions
// function chai(){
//     let username = "hitesh"
//     console.log(this)
//     console.log(this.username)  //undefined
// }

// chai()
/*
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  navigator: [Getter],
  crypto: [Getter]
}
*/

// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username)      //undefined
// }

const chai = () => {
    let username = "hitesh"
    console.log(this)               //{}
    console.log(this.username)      //undefined
}
chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// const addTwo = (num1, num2) => num1 + num2      //7
// const addTwo = (num1, num2) => (num1 + num2)    //7 if we use curly braces then we. have to add return statement 
// const addTwo = (num1, num2) => ({username: "anirudh"})

// console.log(addTwo(3, 4))
