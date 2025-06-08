// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);  //false

const bigNumber = 34235235235235
// Reference (Non Primitive)

// Array, Objects, Functions
const heros = ["hanuman", "prahlad", "dhruva"]

let myObj = {
    name: "anirudh", 
    age: 25
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);  //number
console.log(typeof myFunction); //function
console.log(typeof heros); //object

// Return type of variables in JavaScript
// 1) Primitive Data Types
//     Number => number
//     String => string
//     Boolean => boolean
//     null => object
//     undefined => undefined
//     Symbol => symbol 
//     BigInt => bigint 

// 2) Not Primitive Data Types 
//     Arrays => object 
//     Function => function 
//     Object => object 

// Stack (Primitive), Heap (Non-Primitive)

// JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable when you declare it.
let myYoutubename = "anirudhguptadotcom"
let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "anirudh@google.com"

console.log(userOne.email);
console.log(userTwo.email);