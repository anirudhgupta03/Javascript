// Javascript arrays are resizable
// elements of the array can be of any type not necessarily data type
// javascript array-copy operations create shallow copies

// SHALLOW COPY - A shallow copy of an object is a copy whose properties 
// share the same references (point to the same underlying values)
// DEEP COPY - A deep copy of an object is a copy whose properties 
// do not share the same references

const myArr = [1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1])

//Array Methods

myArr.push(6)           //[1, 2, 3, 4, 5, 6]
myArr.push(7)           //[1, 2, 3, 4, 5, 6, 7]
myArr.pop()             //[1, 2, 3, 4, 5, 6]

myArr.unshift(9)        //[9, 1, 2, 3, 4, 5, 6] Adds an element at the start
myArr.shift()           //[1, 2, 3, 4, 5, 6] Removes an element from the start

console.log(myArr.includes(9)) //false
console.log(myArr.indexOf(9))  //-1

const newArr = myArr.join()     //returns a string

console.log(myArr)      //[1, 2, 3, 4, 5, 6]
console.log(newArr)     //1,2,3,4,5,6


//slice, splice
console.log("A ", myArr)            //A [1, 2, 3, 4, 5, 6]

const myn1 = myArr.slice(1, 3)      
console.log(myn1);                  //[2, 3]
console.log("B ", myArr);           //B [1, 2, 3, 4, 5, 6]

//splice() manipulates the original array.
const myn2 = myArr.splice(1, 3)     
console.log(myn2);                  //[2, 3, 4]
console.log("C ", myArr);           //C 1, 5, 6]
