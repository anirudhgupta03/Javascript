/*
------ for each ------
forEach(callbackFn)
forEach(callbackFn, thisArg)
callbackFn - A function to execute for each element in the array. Its return value is discarded. The function is called with the following arguments:
1. element
The current element being processed in the array.

2. index
The index of the current element being processed in the array.

3. array
The array forEach() was called upon.

The forEach() method of Array instances executes a provided function once for each array element.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
*/
const coding = ["js", "ruby", "java", "python"]

// coding.forEach( function (val) {                //call back function doesn't have name
//     console.log(val);   
// } )

// coding.forEach( (val) => {
//     console.log(val);
// } )

function printMe(item){
    console.log(item);
}

coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr)
})

const myCoding = [
    {
        languageName: "javascript", 
        languageFileName: "js"
    },
    {
        languageName: "java", 
        languageFileName: "java"
    },
    {
        languageName: "python", 
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName)
})