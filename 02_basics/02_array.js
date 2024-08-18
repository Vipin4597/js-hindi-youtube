const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)  // this will push the entire dc_heros array insice the marvel_heros, i.e, array inside of array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)  //concat will merge both the arrays and return a new array
// console.log(allHeros);

//spread operator
const all_new_heros = [...marvel_heros, ...dc_heros]  //spread operator will also merge both the arrays
// benifit with spread operator is that, we can merge multiple arrays
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //flat will merge all the nested arrays into one single array, infinity represents the depth of the flattening
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) //false
console.log(Array.from("Hitesh")) // this will convert Hitesh into an array like 'H','i', etc
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));//returns an array of all the values passed
