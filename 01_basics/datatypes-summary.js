//  Primitive (value type)

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
//type of Null: object
//type of undefines: undefines
//type of Number: number
//type of String: string

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n  // n add karne se automatically bitInt me convert kar deta hai



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

let a=["1", "2"]
let obj={
    name: "vipin"
}
let func= function(){
}
console.log(typeof a); // object
console.log(typeof obj); //object
console.log(typeof func); //function

//primite data types are stored in stack, this means if we assign the value of one primitive variable to another, we get a copy and not the original value
//In case of non primitive data types, they are store in heap, this means if we assign the value of one non primitive varible to another we do not get a copy instead we get the original valule, any changes made will be reflected in both the variables.


// https://262.ecma-international.org/5.1/#sec-11.4.3
