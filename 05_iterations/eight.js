//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
/*
Syntax
reduce(callbackFn)
reduce(callbackFn, initialValue)

Parameters
callbackFn
A function to execute for each element in the array. Its return value becomes the value of the accumulator 
parameter on the next invocation of callbackFn. For the last invocation, the return value becomes the return value of reduce(). The function is called with the following arguments:

accumulator
The value resulting from the previous call to callbackFn. On the first call, its value is initialValue if the latter is 
specified; otherwise its value is array[0].

currentValue
The value of the current element. On the first call, its value is array[0] if initialValue is specified; otherwise its 
value is array[1].

currentIndex
The index position of currentValue in the array. On the first call, its value is 0 if initialValue is specified, 
otherwise 1.

array
The array reduce() was called upon.

initialValue Optional
A value to which accumulator is initialized the first time the callback is called. If initialValue is specified, callbackFn starts executing with the first value in the array as currentValue. If initialValue is not specified, accumulator is initialized to the first value in the array, and callbackFn starts executing with the second value in the array as currentValue. In this case, if the array is empty (so that there's no first value to return as accumulator), an error is thrown.
*/
const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval 
// }, 0)

const myTotal = myNums.reduce( (acc, currval) => acc + currval, 0)
console.log(myTotal)

const shoppingCart = [
    {
        itemName: "py course", 
        price: 2999
    },
    {
        itemName: "mobile dev course", 
        price: 5999
    },
    {
        itemName: "data science course", 
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay)