//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// The map() method of Array instances creates a new array populated with the results of calling a provided 
// function on every element in the calling array.
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNumbers = myNumbers.map( (num) => num + 10)
// const newNumbers = myNumbers.map( (num) => {return num + 10})

// Chaining
const newNumbers = myNumbers
                    .map( (num) => num * 10 )
                    .map( (num) => num + 1 )
                    .filter( (num) => num >= 40 )
console.log(newNumbers)