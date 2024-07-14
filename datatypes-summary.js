// Primitive

// 7 Types : String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100 // number
const scoreValue = 100.3 // number

const isLoggedIn = false // boolean
const outsideTemp = null // object
let userEmail; // undefined

const id = Symbol('123') // symbol
const anotherId = Symbol('123') // symbol

console.log(id === anotherId);
console.log(id);
console.log(anotherId);

const bigNumber = 3544889483525155n // bigint

// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "nagraj", "doga"] // object

const myObj = {
    name: "aman",
    age: 22
} // object

const myFunction = function(){
    console.log("Hello World");
}                                   // function object

// myFunction()

console.log(typeof myFunction);