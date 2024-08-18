// array

const myArr = [0, 1, 2, 3, 4, 5]  // can be of different types, resizable, copying an array creates a shallow copy(refernce type)
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) // adds the 9 at the 0th position by shifting the entire array one positin ahead
// myArr.shift() //remove the first element of the array and shift the array one postion behind

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // returns the section of array , from start to end(end not inclusive), slice does not modify the original array

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // splice is same as slice its just that ye original array se utna portion remove kar dta hai
console.log("C ", myArr);
console.log(myn2);
