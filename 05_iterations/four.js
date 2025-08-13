/* ------ for in -------
/ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
The for...in statement iterates over all enumerable string properties of an object (ignoring properties keyed by symbols), 
including inherited enumerable properties.
*/
const myObject = {
    js: 'javascript',
    cpp: 'c++', 
    rb: 'ruby'
}

for(const key in myObject) {
    console.log(`${key} :- ${myObject[key]}`)
}

const programming = ["js", "rb", "py", "java", "cpp"]

for(const key in programming) {
    console.log(`${key} :- ${programming[key]}`)
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

//Map is not iteratable so, for in cannot be used for Maps
for(const key in map){
    console.log(key)
}