const name = "hitesh"
const repoCount = 50

//Back Ticks
//String Interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('hitesh-hc')

// console.log(gameName[0]); //Note gameName here is not an array, it is an object
// console.log(gameName.__proto__);    //Object

//Methods present in prototype can be accessed directly, no need to access them
//through __proto__


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4); //[Start, End)
console.log(newString); 

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
const anotherString = gameName.slice(-8, 4); //Same as substring, just that it accepts negative values also
console.log(anotherString);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
const newStringOne = "    hitesh  \n"
console.log(newStringOne);
console.log(newStringOne.trim());       //works on white space characters plus line terminators

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
console.log(url.includes('hitesh'))

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
const myString = "hitesh-hc-com";
console.log(myString.split('-'))