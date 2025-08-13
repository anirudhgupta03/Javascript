/* 
------ for...of ------
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object. 
Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList 
(and other DOM collections), as well as the arguments object, generators produced by generator functions, 
and user-defined iterables.

["", "", ""]
[{}, {}, {}]
*/

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num); 
}

const greetings = "Hello world!"

for(const greet of greetings){
    console.log(`Each char is ${greet}`)
}

/*
------ Maps ------
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
*/
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map)
// Map(3) {
//   'IN' => 'India',
//   'USA' => 'United States of America',
//   'Fr' => 'France'
// }

for(const [key, value] of map){         //Array Destructuring
    console.log(key, ':-', value)
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}


// for(const [key, value] of myObject) {    TypeError: myObject is not iterable
//     console.log(key, ":-", value);
// }