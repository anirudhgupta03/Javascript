// const newUser = new Object()     Singleton Object
const newUser = {}  //non singleton object

newUser.id = "123abc"
newUser.name = "Sammy"
newUser.isLoggedIn = false

console.log(newUser)        // { id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email: "anirudhkgupta222@gmail.com",
    fullName: {
        userFullName: {
            firstName: "anirudh",
            lastName: "gupta"
        }
    }
}

// console.log(regularUser.fullName?.userFullName.firstName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {...obj1, ...obj2}     //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' 
// console.log(obj3)

// The Object.assign() static method copies the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
const obj3 = Object.assign({}, obj1, obj2)     
// const returnedTarget = Object.assign(target, source) 
// console.log(returnedTarget === target)              //true    
console.log(obj3)

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "g@gmail.com"
    },
    {
        id: 3,
        email: "i@gmail.com"
    },
    {
        id: 4,
        email: "j@gmail.com"
    },
    {
        id: 5,
        email: "k@gmail.com"
    }
]
users[1].email 
// console.log(Object.keys(newUser))    //[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(newUser))  //[ '123abc', 'Sammy', false ]
// console.log(Object.entries(newUser)) //[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(newUser.hasOwnProperty('isLoggedIn'))

const course = {
    coursename: "js in hindi", 
    price: "999",
    courseInstructor: "hitesh"
}

//course.courseInstructor

const {courseInstructor: instructor} = course 

// console.log(courseInstructor)
console.log(instructor)

// APIs
//JSON format (Javascript Object Notation)
// {
//     "name": "hitesh", 
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]