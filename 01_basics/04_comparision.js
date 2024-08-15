// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);  // false
console.log(null == 0); //false
console.log(null >= 0); //true
//reason is that an equality check == and comparison check <> <= >= works differently
// comparison convert null to a number treating it as zero, that is why option third gives true
//due to these kind of unpredictable outputs typescript is more popular now a days

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === , tirple equal is strict check , this means it also check the type of the values

console.log("2" === 2);
