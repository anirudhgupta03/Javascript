// Based on how the data is kept in the memory - By Value or By Reference
// Primitive (Call by value)

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id)
console.log(anotherId)
console.log(id === anotherId);  //false

const bigNumber = 34235235235235453534535n
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
console.log(typeof myFunction); //function (object function)
console.log(typeof heros); //object

// JavaScript is a dynamically typed language. This means that 
// you don't need to specify the data type of a variable when you 
// declare it.

// https://262.ecma-international.org/5.1/#sec-11.4.3

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

// Stack(All Primitive Data Types use Stack Memory), 
// Heap(All Non-Primitive Data Types use Heap Memory)

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