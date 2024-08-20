//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username); //child function can access variables of parent function
    }
    // console.log(website); //parent function can not access the variables of child

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))  //when we are declaring a function in normal way, then we can access that function even before the declaraiton

function addone(num){
    return num + 1
}



addTwo(5) //error, becuase when we are creating a function expression by stroing the function in a variable we cant access the fucntion before its declaration
const addTwo = function(num){
    return num + 2
}
