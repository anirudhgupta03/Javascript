const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance)

console.log(balance.toString())

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
console.log(balance.toFixed(1))

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision
const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3))

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))

console.log(Number.MAX_VALUE)



//Math

console.log(Math);
console.log(Math.abs(-4))
console.log(Math.round(4.5))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))
console.log(Math.min(4,3,6,8))
console.log(Math.max(4,3,6,8))

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
console.log(Math.random()*10 + 1)
console.log(Math.floor(Math.random()*10 + 1))

const min = 10
const max = 20

console.log(Math.floor((Math.random())*(max - min + 1)) + min)