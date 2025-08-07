// singleton

// object literals
// Object.create

const mySym = Symbol("key1")
const JsUser = {
    name: "Anirudh",
    age: 25,
    location: "Jaipur",
    email: "anirudhkgupta222@gmail.com",            
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    "fullName": "Anirudh Gupta",
    [mySym]: "mykey1"
}
console.log(JsUser.email)
console.log(JsUser['email'])
console.log(JsUser.fullName)        //Anirudh Gupta
console.log(JsUser[mySym])

JsUser.email = "anirudh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "anirudh@microsoft.com"
console.log(JsUser)

// {
//   name: 'Anirudh',
//   age: 25,
//   location: 'Jaipur',
//   email: 'anirudh@chatgpt.com',
//   isLoggedIn: false,
//   lastLoginDays: [ 'Monday', 'Saturday' ],
//   fullName: 'Anirudh Gupta',
//   [Symbol(key1)]: 'mykey1'
// }

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingtwo = function(){
    console.log(`Hello JS user, ${this.name }`)
}
JsUser.greetingtwo()