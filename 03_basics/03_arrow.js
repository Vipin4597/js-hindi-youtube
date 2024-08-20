const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);  //print the current object
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
**********************
// console.log(this); //{} because currently there is no object to which this refers to
//but if we execute the above line in the browser, it will give us the output , windows, because in the browsert windows is the global object
**************************

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); //undefines, In Node.js, when you define and call a function like this, this inside the function refers to the global object (global), not the function's own scope.
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); // it will give undefined
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this); //{}
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"}) //here we are returning an object from the function, here () plays and important role


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
