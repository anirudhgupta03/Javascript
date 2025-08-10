const userEmail = "h@hitesh.ai"

if(userEmail){
    console.log("Got user email")
}
else {
    console.log("Don't have user email")
}

// Falsy Values
// 1. false 
// 2. 0, -0, BigInt 0n 
// 3. "" (Empty String)
// 4. null
// 5. undefined 
// 6. NaN

//Truthy Values (Surprise)
// 1. "0"
// 2. [] (Empty Array)
// 3. 'false'
// 4. " "
// 5. {} (Empty Object)
// 6. function(){} (Empty Function)

let arr = []

if(arr.length === 0){
    console.log("Array is empty")
}

let obj = {}

if(Object.keys(obj).length === 0){
    console.log("Empty Object")
}

/*
   false == 0  // true
   false == '' //true
   0 == ''     //true
*/

/* 
Nullish Coalescing Operator (??)

let val1
val1 = 5 ?? 10      //5
val1 = null ?? 10   //10
val1 = undefined ?? 15 // 15
val1 = null ?? 10 ?? 15  //10
console.log(val1)
*/