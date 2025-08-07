// let score1 = "33avc"

// console.log(typeof(score1));

// let score1InNumber = Number(score1);
// console.log(score1InNumber);
// console.log(typeof score1InNumber);

let score2 = null;

console.log(typeof(score2));

let score2InNumber = Number(score2);
console.log(score2InNumber);
console.log(typeof score2InNumber);

// let score3 = undefined;

// console.log(typeof(score3));

// let score3InNumber = Number(score3);
// console.log(score3InNumber);
// console.log(typeof score3InNumber);

/*
    Number Conversion
    "33" => 33
    "33abc" => NaN
    true -> 1, false -> 0
    null => 0
    undefined => NaN
*/

// let isLoggedIn = "hitesh"
// let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn);

/* 
    Boolean Conversion
    1 => true, 0 -> false
    "" => false
    "anir" => true
*/

// let someNumber = 33
// let stringNumber = String(someNumber)

// console.log(stringNumber)
// console.log(typeof stringNumber)


/*Operations*/
// console.log(2**3);
// console.log("1" + 2 + 2);   //122
// console.log(1 + 2 + "2");  //32
// console.log(true)
// console.log(+true) //1
// console.log(+"") //0

let ex = 1;
let tex = ex++;
console.log(ex, tex);
tex = ++ex;
console.log(ex, tex);